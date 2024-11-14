import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'web-home',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.setScrollAnimation();
  }

  private setScrollAnimation() {
    const sections = document.querySelectorAll('.animate-section');
    const observer = this.getIntersectionObserver();
    sections.forEach(section => observer.observe(section));
  }

  private getIntersectionObserver(): IntersectionObserver {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  }
}
