import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerCardComponent, ServerCardData } from '../../shared/components/server-card/server-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ServerCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly serverCardsData: ServerCardData[] = [
    {
      id: '1',
      title: 'Lorem P',
      primaryLabel: 'Server',
      secondaryLabel: 'Server',
      description: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur.']
    },
    {
      id: '2',
      title: 'Lorem S',
      primaryLabel: 'Server',
      secondaryLabel: 'Server',
      description: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur.']
    },
    {
      id: '3',
      title: 'Lorem T',
      primaryLabel: 'Server',
      secondaryLabel: 'Server',
      description: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur.']
    }
  ];

  trackByCardId(_index: number, card: ServerCardData): string {
    return card.id;
  }
}
