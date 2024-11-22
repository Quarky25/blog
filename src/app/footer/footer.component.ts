import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { transitionAnimation } from '../services/transition-animation.service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  animations: [transitionAnimation]
})
export class FooterComponent {
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
