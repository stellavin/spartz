import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      { path: 'alerts', component: HomeComponent },
      { path: 'assets', component: HomeComponent },
      { path: 'expand', component: HomeComponent },
      { path: 'connections', component: HomeComponent },
      { path: 'reports', component: HomeComponent },
      { path: 'filters', component: HomeComponent },
      { path: 'settings', component: HomeComponent },
      { path: 'messages', component: HomeComponent }
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
