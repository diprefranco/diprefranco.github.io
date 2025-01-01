import { Component } from '@angular/core';
import { ImgComponent } from "../../../shared/img/img.component";

@Component({
  selector: 'web-hero',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
}
