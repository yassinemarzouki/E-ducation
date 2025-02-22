import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses = [
    { id: 1, title: 'Introduction à Angular', description: 'Apprenez les bases d\'Angular.', duration: '2h', image: 'assets/courses/ArchitectureToken.jpeg' },
    { id: 2, title: 'JavaScript Avancé', description: 'Maîtrisez les concepts avancés de JavaScript.', duration: '3h', image: 'assets/courses/Architecture-Token.jpeg' },
    { id: 3, title: 'Node.js pour Débutants', description: 'Découvrez comment créer des applications backend avec Node.js.', duration: '4h', image: 'assets/images/nodejs.jpg' },
  ];

  getCourses() {
    return this.courses; // ICI il ya renvoie de la liste des cours
  }
}
