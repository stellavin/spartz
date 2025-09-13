
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="hello-container">
      <h1>Hello spartz this is pure UI no database</h1>
    </div>
  `,
  styles: [`
    .hello-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    h1 {
      font-size: 3rem;
      font-weight: 300;
      text-align: center;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
  `]
})
export class AppComponent {
  title = 'spikerz';
}
