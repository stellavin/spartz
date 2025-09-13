import { NavItem } from '../../layout/side-nav-bar/side-nav-bar.component';

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: 'pi pi-th-large', route: '/dashboard' },
  { label: 'Alerts', icon: 'pi pi-exclamation-triangle', route: '/alerts' },
  { label: 'Assets', icon: 'pi pi-box', route: '/assets' },
  { label: 'Expand', icon: 'pi pi-arrows-alt', route: '/expand' },
  { label: 'Connections', icon: 'pi pi-link', route: '/connections' },
  { label: 'Reports', icon: 'pi pi-file', route: '/reports' },
  { label: 'Filters', icon: 'pi pi-filter', route: '/filters' }
];

export const BOTTOM_NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Settings', icon: 'pi pi-cog', route: '/settings' },
  { label: 'Messages', icon: 'pi pi-comment', route: '/messages' }
];

export const SIDEBAR_CONFIG = {
  WIDTH: 240,
  WIDTH_COLLAPSED: 60,
  TOGGLE_BUTTON_SIZE: 32,
  ANIMATION_DURATION: 300
} as const;
