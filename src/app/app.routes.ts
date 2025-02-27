import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'courses', loadComponent: () => import('./features/courses/course-list/course-list.component').then(m => m.CourseListComponent) },
  { path: 'course/:id', loadComponent: () => import('./features/courses/course-detail/course-detail.component').then(m => m.CourseDetailComponent) },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent) },
  { path: 'admin', loadComponent: () => import('./features/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
  { path: 'auth', loadComponent: () => import('./features/auth/auth/auth.component').then(m => m.AuthComponent) },
  { path: '**', redirectTo: '/home' } // Gestion des erreurs 404
    
];
