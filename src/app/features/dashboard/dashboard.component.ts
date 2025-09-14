import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSectionComponent } from './sections/left-section/left-section.component';
import { AssetsAndRiskSectionComponent } from './sections/right-section/assets-and-risk-section/assets-and-risk-section.component';
import { GraphPanelComponent } from './sections/right-section/graph-panel/graph-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LeftSectionComponent, AssetsAndRiskSectionComponent, GraphPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
}
