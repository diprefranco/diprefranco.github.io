import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  ngOnInit() {
    this.setAnimation();
  }

  private setAnimation() {
    setTimeout(() => {
      document.querySelector('.animate')?.classList.add('visible');
    }, 0.1);
  }
}
