import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {
  @Input() src!: string;
  @Input() width!: number;
  @Input() height!: number;
  @Input() alt!: string;
  imgLoaded = false;
}
