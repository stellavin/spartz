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

  // Navigation items based on the exact image - 7 items only
  navItems: NavItem[] = [
    { label: 'Lorem', icon: 'pi pi-th-large', route: '/dashboard' },
    { label: 'Lorem', icon: 'pi pi-exclamation-triangle', route: '/alerts' },
    { label: 'Lorem', icon: 'pi pi-box', route: '/assets' },
    { label: 'Lorem', icon: 'pi pi-arrows-alt', route: '/expand' },
    { label: 'Lorem', icon: 'pi pi-link', route: '/connections' },
    { label: 'Lorem', icon: 'pi pi-file', route: '/reports' },
    { label: 'Lorem', icon: 'pi pi-filter', route: '/filters' }
  ];

  // Bottom navigation items (Settings and Messages)
  bottomNavItems: NavItem[] = [
    { label: 'Lorem', icon: 'pi pi-cog', route: '/settings' },
    { label: 'Lorem', icon: 'pi pi-comment', route: '/messages' }
  ];

  // User profile data - matching the image
  userProfile = {
    name: 'Lorem',
    role: 'Lorem',
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
