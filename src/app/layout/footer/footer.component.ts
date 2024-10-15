import { Component } from '@angular/core';

@Component({
  selector: 'web-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
