import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeroComponent } from "./layout/hero/hero.component";
import { ExperienceComponent } from "./layout/experience/experience.component";
import { ProjectsComponent } from './layout/projects/projects.component';
import { AboutMeComponent } from './layout/about-me/about-me.component';
import { ContactComponent } from './layout/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
