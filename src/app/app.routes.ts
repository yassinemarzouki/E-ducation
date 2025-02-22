import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
];
