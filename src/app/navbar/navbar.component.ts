import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, query, useAnimation, stagger } from '@angular/animations';
import { transitionAnimation } from '../services/transition-animation.service.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  
})
export class NavbarComponent {
 isScrollingDown = false; //! determines the navbar state
  lastScrollPosition = 0; //! Keeps track of the last scrollposition

  // ! Detect Scroll Event
  @HostListener('window:scroll', []) // for window scroll events
  onScroll(): void {
    
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

      if(currentScrollPosition > this.lastScrollPosition) {
        // ! Scrolling down
        this.isScrollingDown = true;
      }else {
        // ! Scrolling up
        this.isScrollingDown = false;
      }
    this.lastScrollPosition = currentScrollPosition;
  
  }
  

}
