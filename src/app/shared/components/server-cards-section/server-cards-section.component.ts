import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerCardComponent, ServerCardData } from '../server-card/server-card.component';

@Component({
  selector: 'app-server-cards-section',
  standalone: true,
  imports: [CommonModule, ServerCardComponent],
  templateUrl: './server-cards-section.component.html',
  styleUrls: ['./server-cards-section.component.scss']
})
export class ServerCardsSectionComponent {
  @Input() title: string = '';
  @Input() cards: ServerCardData[] = [];

  trackByCardId(_index: number, card: ServerCardData): string {
    return card.id;
  }
}
