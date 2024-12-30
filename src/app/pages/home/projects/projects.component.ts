import { Component } from '@angular/core';
import { ImgComponent } from '../../../shared/img/img.component';

@Component({
  selector: 'web-projects',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
}
