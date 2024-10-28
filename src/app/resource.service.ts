import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private phoneNumber = '+34 614 266 448';
  private email = 'diprefranco@gmail.com';

  getResumeUrl(): string {
    return 'https://drive.google.com/file/d/1KG__wUbzWDChwJD0BUnZMK_qafDUg9h1/view?usp=drive_link';
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
