import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../../resource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  resumeUrl!: string;
  heroImageLoaded = false;

  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.resumeUrl = this.resourceService.getResumeUrl();
  }
}
