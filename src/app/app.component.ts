import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeroComponent } from "./layout/hero/hero.component";
import { SampleImagesComponent } from "./layout/sample-images/sample-images.component";
import { CardsComponent } from './layout/cards/cards.component';
import { MoreInformationComponent } from "./layout/more-information/more-information.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    SampleImagesComponent,
    CardsComponent,
    MoreInformationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
