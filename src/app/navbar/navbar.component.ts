import { Component,HostBinding, NgZone, signal } from '@angular/core';
import { trigger, state, style, animate, transition, query, useAnimation, stagger } from '@angular/animations';
import { transitionAnimation } from '../services/transition-animation.service.service';
import { HostListener } from '@angular/core';
import {TriggerAnimationService } from '../services/trigger-animation.service.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [transitionAnimation]
})

export class NavbarComponent {
  scrollState = 'expanded';
  scrollingDown: boolean = false;
  navItems = ['Home', 'About', 'Read more', 'Contact us', 'Title'];
  private lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Scrolling down
      this.scrollingDown = true;
      this.scrollState = 'collapsed';
    } else {
      // Scrolling up
      this.scrollState = 'expanded';
      this.scrollingDown = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
  
  

}
