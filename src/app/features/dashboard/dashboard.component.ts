import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="dashboard-container">
      <!-- Dashboard Header -->
      <header class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Dashboard</h1>
          <p class="dashboard-subtitle">Monitor your system performance and analytics</p>
        </div>
        
        <div class="header-actions">
          <p-button 
            [loading]="isLoading()"
            (onClick)="refreshData()"
            icon="pi pi-refresh"
            label="Refresh"
            [text]="true">
          </p-button>
          
          <div class="last-updated" *ngIf="!isLoading()">
            <i class="pi pi-clock"></i>
            Last updated: {{ lastUpdated() | date:'short' }}
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <div class="welcome-message">
          <h2>Welcome to Spikerz Dashboard!</h2>
          <p>Your SideNavBarComponent is now working correctly. You can navigate between different sections using the sidebar.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e9ecef;
    }

    .dashboard-title {
      font-size: 2rem;
      font-weight: 600;
      color: #2c3e50;
      margin: 0;
    }

    .dashboard-subtitle {
      color: #6c757d;
      margin: 0.5rem 0 0 0;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .last-updated {
      color: #6c757d;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .dashboard-content {
      display: grid;
      gap: 2rem;
    }

    .welcome-message {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 3rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .welcome-message h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      font-weight: 300;
    }

    .welcome-message p {
      font-size: 1.1rem;
      margin: 0;
      opacity: 0.9;
    }
  `]
})
export class DashboardComponent {
  isLoading = signal(false);
  lastUpdated = signal(new Date());

  refreshData() {
    this.isLoading.set(true);
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
      this.lastUpdated.set(new Date());
    }, 2000);
  }
}
