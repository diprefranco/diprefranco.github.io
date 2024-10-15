import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //footer
  readonly currentYear = new Date().getFullYear();

  ngOnInit() {
    //header
    this.setHamburgerMenuConfig();
  }

  setHamburgerMenuConfig() {
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
