// trigger-animation.service.ts

import { Injectable } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, AnimationTriggerMetadata } from '@angular/animations';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggerAnimationService {
  private scrollState = new BehaviorSubject<'up' | 'down'>('up');
  scrollState$: Observable<'up' | 'down'> = this.scrollState.asObservable();

  private lastScrollTop = 0;

  constructor() {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
  }

  private handleScroll(): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      this.scrollState.next('down');
    } else {
      this.scrollState.next('up');
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  getScrollAnimation(): AnimationTriggerMetadata {
    return trigger('scrollAnimation', [
      state('up', style({
        height: '{{ height }}',
        opacity: 1
      })),
      state('down', style({
        height: '{{ closedHeight }}',
        opacity: 0.5
      })),
      transition('up => down', [
        animate('{{ duration }}', keyframes([
          style({ height: '{{ height }}', opacity: 1, offset: 0 }),
          style({ height: '{{ intermediateHeight }}', opacity: 0.8, offset: 0.2 }),
          style({ height: '{{ closedHeight }}', opacity: 0.6, offset: 0.7 }),
          style({ height: '{{ closedHeight }}', opacity: 0.5, offset: 1 })
        ]))
      ]),
      transition('down => up', [
        animate('{{ duration }}', keyframes([
          style({ height: '{{ closedHeight }}', opacity: 0.5, offset: 0 }),
          style({ height: '{{ intermediateHeight }}', opacity: 0.7, offset: 0.3 }),
          style({ height: '{{ height }}', opacity: 0.9, offset: 0.8 }),
          style({ height: '{{ height }}', opacity: 1, offset: 1 })
        ]))
      ])
    ]);
  }
}