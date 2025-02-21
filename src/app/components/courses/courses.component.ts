import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  @Input() course!: Course; // Réception des données du parent

  constructor() {}
}
