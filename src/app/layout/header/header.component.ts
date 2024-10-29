import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../resource.service';

@Component({
  selector: 'web-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  resumeUrl!: string;
  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.init();
    this.setHamburgerMenuConfig();
  }

  private init() {
    this.resumeUrl = this.resourceService.getResumeUrl();
  }

  private setHamburgerMenuConfig() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
      this.addHamburgerClickEvent(hamburger, navMenu);
      this.addNavLinksClickEvent(hamburger, navMenu);
    }
  }

  private addHamburgerClickEvent(hamburger: Element, navMenu: Element) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  private addNavLinksClickEvent(hamburger: Element, navMenu: Element) {
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }
}
