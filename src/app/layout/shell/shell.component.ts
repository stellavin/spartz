import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    SideNavBarComponent
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  sidebarVisible = signal(true);

  toggleSidebar() {
    this.sidebarVisible.update(visible => !visible);
  }

  onSideNavToggle() {
    this.toggleSidebar();
  }
}
