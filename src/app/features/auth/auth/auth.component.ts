import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faSignInAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule,CommonModule,FontAwesomeModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;

  isSignUp = false;
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
    this.cdr.detectChanges(); // Forcer la mise à jour du DOM
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Connexion :', this.loginForm.value);
    } else {
      console.log('Formulaire de connexion invalide');
    }
  }

  onSignup() {
    if (this.signupForm.valid) {
      console.log('Inscription :', this.signupForm.value);
    } else {
      console.log('Formulaire d\'inscription invalide');
    }
  }
}