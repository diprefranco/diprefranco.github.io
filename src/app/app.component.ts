import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly currentYear = new Date().getFullYear();

  ngOnInit() {
    this.logConsoleWelcomeMessage();
  }

  private logConsoleWelcomeMessage() {
    setTimeout(() => {
      console.log(`%c
                                                                                                                         
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ███████╗███████╗██╗     ██╗      █████╗ ███████╗██╗  
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ██╔════╝██╔════╝██║     ██║     ██╔══██╗██╔════╝██║  
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗      █████╗  █████╗  ██║     ██║     ███████║███████╗██║  
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝      ██╔══╝  ██╔══╝  ██║     ██║     ██╔══██║╚════██║╚═╝  
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗    ██║     ███████╗███████╗███████╗██║  ██║███████║██╗  
   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝    ╚═╝     ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  
                                                                                                                         
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗  
  ║                      The site code you're exploring might be minimized.                                           ║  
  ║                      Check it out here: https://github.com/diprefranco/diprefranco.github.io                      ║  
  ║                                                                                                                   ║  
  ║                                                © ${this.currentYear} Franco Dipre                                                ║  
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝  
                                                                                                                         `,
        "font-size: 14px; color: #0abefb; background-color: #191919");
    }, 1000);
  }
}
