import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../resource.service';

@Component({
  selector: 'web-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  readonly currentYear = new Date().getFullYear();
  resumeUrl!: string;
  whatsAppUrl!: string;
  emailUrl!: string;
  linkedInUrl!: string;
  githubUrl!: string;
  stackoverflowUrl!: string;

  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.resumeUrl = this.resourceService.getResumeUrl();
    this.whatsAppUrl = this.resourceService.getWhatsAppUrl();
    this.emailUrl = this.resourceService.getEmailUrl();
    this.linkedInUrl = this.resourceService.getLinkedInUrl();
    this.githubUrl = this.resourceService.getGithubUrl();
    this.stackoverflowUrl = this.resourceService.getStackoverflowUrl();
  }
}
