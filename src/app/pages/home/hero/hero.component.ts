import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../../resource.service';

@Component({
  selector: 'web-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  resumeUrl!: string;
  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.resumeUrl = this.resourceService.getResumeUrl();
  }
}
