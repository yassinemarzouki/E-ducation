import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    {
      id: 1,
      title: 'Introduction à Angular',
      description: 'Apprenez les bases d\'Angular et créez des applications web modernes.',
      image: 'assets/images/angular.jpg',
    },
    {
      id: 2,
      title: 'JavaScript Avancé',
      description: 'Maîtrisez les concepts avancés de JavaScript.',
      image: 'assets/images/javascript.jpg',
    },
    {
      id: 3,
      title: 'Node.js pour les Débutants',
      description: 'Découvrez comment créer des applications backend avec Node.js.',
      image: 'assets/images/nodejs.jpg',
    },
  ];

  constructor() {}

  // Méthode pour récupérer tous les cours
  getCourses() {
    return this.courses;
  }

  // Méthode pour récupérer un cours par son ID
  getCourseById(id: number) {
    return this.courses.find((course) => course.id === id);
  }
}