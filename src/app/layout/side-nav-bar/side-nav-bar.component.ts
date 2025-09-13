import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NAVIGATION_ITEMS, BOTTOM_NAVIGATION_ITEMS } from '../../core/constants/navigation.constants';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: string;
}

export interface UserProfile {
  name: string;
  role: string;
  avatar: string;
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

  // Navigation items
  readonly navItems: NavItem[] = NAVIGATION_ITEMS;

  // Bottom navigation items
  readonly bottomNavItems: NavItem[] = BOTTOM_NAVIGATION_ITEMS;

  // User profile data - matching the image
  userProfile: UserProfile = {
    name: 'Lorem',
    role: 'Lorem',
    avatar: 'pi pi-user'
  };

  constructor(private router: Router) {}

  onToggleCollapse(): void {
    this.toggleCollapse.emit();
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  onLogout(): void {
    // TODO: Implement logout logic here
    console.log('Logout clicked');
  }

  trackByRoute(_index: number, item: NavItem): string {
    return item.route;
  }
}
