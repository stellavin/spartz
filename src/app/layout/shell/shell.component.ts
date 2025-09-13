import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    MenuModule
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  sidebarVisible = signal(false);
  
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large',
      routerLink: ['/dashboard']
    },
    {
      label: 'Analytics',
      icon: 'pi pi-chart-bar',
      routerLink: ['/analytics']
    },
    {
      label: 'Reports',
      icon: 'pi pi-file',
      routerLink: ['/reports']
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: ['/settings']
    },
    {
      label: 'Users',
      icon: 'pi pi-users',
      routerLink: ['/users']
    }
  ];

  toggleSidebar() {
    this.sidebarVisible.update(visible => !visible);
  }
}
