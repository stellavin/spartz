import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-placeholder">
      <h2>Welcome to Spikerz</h2>
      <p>This is the main content area. The sidebar is fixed and this area scrolls.</p>
      <div class="demo-content">
        <h3>Features:</h3>
        <ul>
          <li>Fixed sidebar navigation</li>
          <li>Responsive design with mobile support</li>
          <li>Scrollable main content area</li>
          <li>PrimeNG components integration</li>
          <li>Modern SCSS styling</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .content-placeholder {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      h2 {
        color: #2c3e50;
        margin-bottom: 1rem;
        font-size: 2rem;
      }
      
      p {
        color: #6c757d;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }
      
      .demo-content {
        h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        ul {
          list-style: none;
          padding: 0;
          
          li {
            padding: 0.5rem 0;
            color: #495057;
            position: relative;
            padding-left: 1.5rem;
            
            &::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: #28a745;
              font-weight: bold;
            }
          }
        }
      }
    }
  `]
})
export class HomeComponent {}
