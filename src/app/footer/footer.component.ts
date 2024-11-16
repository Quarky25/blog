import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
isScrollingUp: boolean = false;
lastScrollPosition: number = 0;
constructor(){


}

@HostListener('window:scroll', [])

onScroll(): void {
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

  if(currentScrollPosition < this.lastScrollPosition) {
    this.isScrollingUp = true;
  }else {
    this.isScrollingUp = false;
  }
  this.lastScrollPosition = currentScrollPosition;
}
}
