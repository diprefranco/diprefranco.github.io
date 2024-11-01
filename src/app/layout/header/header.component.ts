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
    const body = document.querySelector("body");

    if (hamburger && navMenu && body) {
      this.addHamburgerClickEvent(hamburger, navMenu, body);
      this.addNavLinksClickEvent(hamburger, navMenu, body);
      this.disableTabKeyIfHamburgerMenuIsOpen(navMenu);
      this.closeHamburgerMenuOnWindowResize(hamburger, navMenu, body);
    }
  }

  private addHamburgerClickEvent(hamburger: Element, navMenu: Element, body: Element) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      body.classList.toggle("blocked");
    });
  }

  private addNavLinksClickEvent(hamburger: Element, navMenu: Element, body: Element) {
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => this.closeHamburgerMenu(hamburger, navMenu, body))
    );
  }

  private disableTabKeyIfHamburgerMenuIsOpen(navMenu: Element) {
    document.onkeydown = (evt) => {
      if (evt.key === 'Tab' && navMenu.classList.contains("active")) {
        return false;
      }
      return true;
    }
  }

  private closeHamburgerMenuOnWindowResize(hamburger: Element, navMenu: Element, body: Element) {
    const closeHamburgerMenu = this.closeHamburgerMenu;
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        closeHamburgerMenu(hamburger, navMenu, body);
      }
    });
  }

  private closeHamburgerMenu(hamburger: Element, navMenu: Element, body: Element) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("blocked");
  }
}
