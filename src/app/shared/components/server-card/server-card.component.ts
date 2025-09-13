import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServerCardData {
  id: string;
  title: string;
  primaryLabel: string;
  secondaryLabel: string;
  description: string[];
  iconClass?: string;
}

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss']
})
export class ServerCardComponent {
  @Input() cardData!: ServerCardData;
}
