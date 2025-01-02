import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private phoneNumber = '+1 415 523 8886';
  private email = 'diprefranco@gmail.com';

  getResumeUrl(): string {
    return 'https://drive.google.com/file/d/1uZoAHx37ilXUJat5sdNlnDCMeAQ8_M7k/view?usp=sharing';
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getWhatsAppUrl(): string {
    return `https://wa.me/${this.phoneNumber.replaceAll('+', '').replaceAll(' ', '')}`;
  }

  getEmail(): string {
    return this.email;
  }

  getEmailUrl(): string {
    return `mailto:${this.email}`;
  }

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/dipre-franco/';
  }

  getGithubUrl(): string {
    return 'https://github.com/diprefranco';
  }

  getStackoverflowUrl(): string {
    return 'https://stackoverflow.com/users/6809179';
  }
}
