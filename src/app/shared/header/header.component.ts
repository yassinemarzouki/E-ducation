import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false; // État du menu principal
  isAuthMenuOpen = false; // État du menu d'authentification

  // Basculer l'état du menu principal
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Basculer l'état du menu d'authentification
  toggleAuthMenu() {
    this.isAuthMenuOpen = !this.isAuthMenuOpen;
  }
}
