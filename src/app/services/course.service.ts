import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() {
    return [
      {
        title: 'Angular pour Débutants',
        description: 'Apprenez les bases d\'Angular et créez des applications web modernes.',
        image: 'assets/courses/ArchitectureToken.jpeg',
        badge: 'Nouveau',
        rating: '★★★★☆',
        duration: '2h 30min',
      },
      {
        title: 'JavaScript Avancé',
        description: 'Maîtrisez les concepts avancés de JavaScript et devenez un expert.',
        image: 'assets/courses/ArchitectureToken.jpeg',
        badge: 'Populaire',
        rating: '★★★★★',
        duration: '3h 15min',
      },
      {
        title: 'UI/UX Design',
        description: 'Découvrez les principes du design d\'interface utilisateur et d\'expérience utilisateur.',
        image: 'assets/courses/ArchitectureToken.jpeg',
        badge: 'Recommandé',
        rating: '★★★★☆',
        duration: '1h 45min',
      },
    ];
  }
}