import { Component } from '@angular/core';
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
export class HomeComponent {
}
