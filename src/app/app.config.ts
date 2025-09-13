import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'alerts', component: DashboardComponent },
      { path: 'assets', component: DashboardComponent },
      { path: 'expand', component: DashboardComponent },
      { path: 'connections', component: DashboardComponent },
      { path: 'reports', component: DashboardComponent },
      { path: 'filters', component: DashboardComponent },
      { path: 'settings', component: DashboardComponent },
      { path: 'messages', component: DashboardComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    MessageService
  ]
};
