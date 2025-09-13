import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface KeyValueItem {
  key: string;
  value: string;
  hasIcon?: boolean;
  iconClass?: string;
}

@Component({
  selector: 'app-key-value-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-value-list.component.html',
  styleUrls: ['./key-value-list.component.scss']
})
export class KeyValueListComponent {
  @Input() items: KeyValueItem[] = [];

  trackByKey(_index: number, item: KeyValueItem): string {
    return `${item.key}-${item.value}`;
  }
}
