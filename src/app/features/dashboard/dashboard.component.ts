import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
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
      background-color: #FAFAFA;
      min-height: 100vh;
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
}
