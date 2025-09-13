import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsTableComponent } from './assets-table.component';
import { ContextualRiskSummaryComponent } from './contextual-risk-summary.component';

@Component({
  selector: 'app-assets-and-risk-section',
  standalone: true,
  imports: [CommonModule, AssetsTableComponent, ContextualRiskSummaryComponent],
  templateUrl: './assets-and-risk-section.component.html',
  styleUrls: ['./assets-and-risk-section.component.scss']
})
export class AssetsAndRiskSectionComponent {
}
