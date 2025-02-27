import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
// Les icônes que j'ai utilisées dans le composant
faBars = faBars;
faUser = faUser;

  isMenuOpen = false; 
  isAuthMenuOpen = false; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleAuthMenu() {
    this.isAuthMenuOpen = !this.isAuthMenuOpen;
  }
}
