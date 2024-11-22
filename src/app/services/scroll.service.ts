import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
private scrollSubject = new Subject<number>();
private rafId: number | null = null;
private lastScrollTop = 0;

  constructor(private ngZone: NgZone) { 

  }

  initScroll(): Observable<number> {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, {passive: true});
      this.rafLoop();
    });
    return this.scrollSubject.asObservable();
  }

  private onScroll = (): void => {
    if (this.rafId === null) {
      this.rafLoop();
    }
  }

  private rafLoop = (): void => {
    const scrollTop = window.scrollY;
    if(this.lastScrollTop !== scrollTop) {
      this.lastScrollTop = scrollTop;
      this.scrollSubject.next(scrollTop);
    }
    this.rafId = requestAnimationFrame(this.rafLoop);
  }

  destroy():void {
    window.removeEventListener('scroll', this.onScroll);
    if(this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
    }
  }
}
