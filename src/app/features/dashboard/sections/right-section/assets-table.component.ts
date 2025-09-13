import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Asset {
  id: string;
  name: string;
  ip: string;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
}

@Component({
  selector: 'app-assets-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent {
  assets: Asset[] = [
    {
      id: '1',
      name: 'Loremipsumdolorsit',
      ip: '192.168.1.1',
      riskLevel: 'Critical'
    },
    {
      id: '2',
      name: 'Loremipsumdolorsit002',
      ip: '192.168.1.2',
      riskLevel: 'Critical'
    }
  ];
}
