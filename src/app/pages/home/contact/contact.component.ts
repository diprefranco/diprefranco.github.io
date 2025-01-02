import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../../../resource.service';

@Component({
  selector: 'web-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  email!: string;
  emailUrl!: string;
  linkedInUrl!: string;

  private resourceService = inject(ResourceService);

  ngOnInit() {
    this.init();
  }

  private init() {
    this.email = this.resourceService.getEmail();
    this.emailUrl = this.resourceService.getEmailUrl();
    this.linkedInUrl = this.resourceService.getLinkedInUrl();
  }
}
