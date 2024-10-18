import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  getResumeUrl(): string {
    return 'https://drive.google.com/file/d/1KG__wUbzWDChwJD0BUnZMK_qafDUg9h1/view?usp=drive_link';
  }
}
