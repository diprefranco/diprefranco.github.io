import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    this.setHamburgerMenuConfig();
  }

  private setHamburgerMenuConfig() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");

    if (hamburger && navMenu && body) {
      this.addHamburgerClickEvent(hamburger, navMenu, body);
      this.addNavLinksClickEvent(hamburger, navMenu, body);
      this.addKeyDownEventWhenHamburgerMenuIsOpen(hamburger, navMenu, body);
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

  private addKeyDownEventWhenHamburgerMenuIsOpen(hamburger: Element, navMenu: Element, body: Element) {
    document.onkeydown = (evt) => {
      if (this.isHamburgerMenuOpen(navMenu)) {
        switch (evt.key) {
          case 'Tab':
            return this.enableKeyDown(false);
          case 'Escape':
            this.closeHamburgerMenu(hamburger, navMenu, body);
        }
      }
      return this.enableKeyDown(true);
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

  private isHamburgerMenuOpen(navMenu: Element): boolean {
    return navMenu.classList.contains("active");
  }

  private enableKeyDown(enable: boolean): boolean {
    return enable;
  }
}
