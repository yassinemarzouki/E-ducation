import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
 // Icônes FontAwesome
 faInfoCircle = faInfoCircle;
 faUserPlus = faUserPlus;

 courses = [
   {
     id: 1,
     title: 'Développement Web Avancé',
     description: 'Maîtrisez les technologies modernes du web.',
     image: 'courses/cour3.jpg',
   },
   {
     id: 2,
     title: 'Data Science pour Débutants',
     description: 'Apprenez les bases de la data science.',
     image: 'courses/cour3.jpg',
   },
   {
     id: 3,
     title: 'Design Graphique avec Figma',
     description: 'Créez des designs professionnels avec Figma.',
     image: 'courses/cour3.jpg',
   },
   {
     id: 4,
     title: 'Marketing Digital',
     description: 'Découvrez les stratégies de marketing digital.',
     image: 'courses/cour3.jpg',
   },
 ];

 // Todo Méthode pour afficher les détails d'un cours
 viewDetails(course: any) {
   console.log('Détails du cours :', course);
   // Todo Rediriger vers la page de détails ou afficher une modal
 }

 // Todo pour s'inscrire à un cours
 enroll(course: any) {
   console.log('Inscription au cours :', course);
   // Todo Logique d'inscription
 }
}