import { Component } from '@angular/core';
import { ImgComponent } from '../../../shared/img/img.component';

@Component({
  selector: 'web-not-found',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
}
