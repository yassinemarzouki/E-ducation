import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  searchText: string = ''; 
  selectedCourse: any = null; 
  newCourseTitle: string = ''; 

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  register(course: any) {
    console.log(`Inscription au cours : ${course.title}`);
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  addCourse() {
    if (this.newCourseTitle) {
      this.courses.push({ id: this.courses.length + 1, title: this.newCourseTitle, description: 'Nouveau cours ajouté', image: 'assets/images/default.jpg' });
      this.newCourseTitle = ''; 
    }
  }
}

