import { NavItem } from '../../layout/side-nav-bar/side-nav-bar.component';

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Lorem', icon: 'pi pi-th-large', route: '/dashboard' },
  { label: 'Lorem', icon: 'pi pi-exclamation-triangle', route: '/alerts' },
  { label: 'Lorem', icon: 'pi pi-box', route: '/assets' },
  { label: 'Lorem', icon: 'pi pi-arrows-alt', route: '/expand' },
  { label: 'Lorem', icon: 'pi pi-link', route: '/connections' },
  { label: 'Lorem', icon: 'pi pi-file', route: '/reports' },
  { label: 'Lorem', icon: 'pi pi-filter', route: '/filters' }
];

export const BOTTOM_NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Lorem', icon: 'pi pi-cog', route: '/settings' },
  { label: 'Lorem', icon: 'pi pi-comment', route: '/messages' }
];

export const SIDEBAR_CONFIG = {
  WIDTH: 240,
  WIDTH_COLLAPSED: 60,
  TOGGLE_BUTTON_SIZE: 32,
  ANIMATION_DURATION: 300
} as const;
