import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RiskSummary {
  level: string;
  count: number;
  color: string;
}

@Component({
  selector: 'app-contextual-risk-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contextual-risk-summary.component.html',
  styleUrls: ['./contextual-risk-summary.component.scss']
})
export class ContextualRiskSummaryComponent {
  riskSummary: RiskSummary[] = [
    { level: 'Critical', count: 2, color: '#dc3545' },
    { level: 'High', count: 0, color: '#dc3545' },
    { level: 'Medium', count: 0, color: '#fd7e14' },
    { level: 'Low', count: 0, color: '#28a745' }
  ];

  constructor() {}

  getTotalCount(): number {
    return this.riskSummary.reduce((sum, risk) => sum + risk.count, 0);
  }
}
