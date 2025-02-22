import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../../../shared/img/img.component';
import { Project } from './project';

@Component({
  selector: 'web-projects',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      description: 'Angular template to start a personal website',
      imgSrc: 'assets/img/angular-template-my-website.jpg',
      demoUrl: 'https://diprefranco.github.io/angular-template-my-website/',
      codeUrl: 'https://github.com/diprefranco/angular-template-my-website'
    },
    {
      description: 'A fun app showing a random photo of me on every visit or refresh',
      imgSrc: 'assets/img/random-me.jpg',
      demoUrl: 'https://diprefranco.github.io/random-me/',
      codeUrl: 'https://github.com/diprefranco/random-me'
    },
    {
      description: 'A collection of creative and themed 404 pages',
      imgSrc: 'assets/img/404-pages.jpg',
      demoUrl: 'https://diprefranco.github.io/404-pages/',
      codeUrl: 'https://github.com/diprefranco/404-pages'
    }
  ];
}
