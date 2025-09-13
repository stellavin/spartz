import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: string;
}

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule
  ],
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {
  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();

  // Navigation items based on the image description
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', route: '/dashboard' },
    { label: 'Alerts', icon: 'pi pi-exclamation-triangle', route: '/alerts' },
    { label: 'Assets', icon: 'pi pi-cube', route: '/assets' },
    { label: 'Expand', icon: 'pi pi-arrows-alt', route: '/expand' },
    { label: 'Connections', icon: 'pi pi-plug', route: '/connections' },
    { label: 'Reports', icon: 'pi pi-file', route: '/reports' },
    { label: 'Filters', icon: 'pi pi-filter', route: '/filters' },
    { label: 'Settings', icon: 'pi pi-cog', route: '/settings' },
    { label: 'Messages', icon: 'pi pi-comment', route: '/messages' }
  ];

  // User profile data
  userProfile = {
    name: 'John Doe',
    role: 'Administrator',
    avatar: 'pi pi-user'
  };

  constructor(private router: Router) {}

  onToggleCollapse() {
    this.toggleCollapse.emit();
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  onLogout() {
    // Implement logout logic here
    console.log('Logout clicked');
  }
}
