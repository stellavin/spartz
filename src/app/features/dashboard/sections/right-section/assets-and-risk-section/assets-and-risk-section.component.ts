import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsTableComponent } from '../assets-table/assets-table.component';
import { ContextualRiskSummaryComponent } from '../contextual-risk-summary/contextual-risk-summary.component';
import { Asset, RiskLevelInfo } from '../models/asset.interface';

/**
 * Container component for assets table and contextual risk summary
 * Manages data flow between child components
 */
@Component({
  selector: 'app-assets-and-risk-section',
  standalone: true,
  imports: [CommonModule, AssetsTableComponent, ContextualRiskSummaryComponent],
  templateUrl: './assets-and-risk-section.component.html',
  styleUrls: ['./assets-and-risk-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsAndRiskSectionComponent implements OnInit {
  /** Assets data */
  assets: Asset[] = [];
  
  /** Risk summary data */
  riskSummary: RiskLevelInfo[] = [];
  
  /** Loading state */
  isLoading = false;
  
  /** Section title */
  sectionTitle = 'Assets & Risk Overview';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Load initial data
   * In a real application, this would call services
   */
  private loadData(): void {
    this.isLoading = true;
    
    // Simulate async data loading
    setTimeout(() => {
      this.assets = [
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

      this.riskSummary = [
        { level: 'Critical', count: 2, color: '#dc3545', priority: 1 },
        { level: 'High', count: 0, color: '#dc3545', priority: 2 },
        { level: 'Medium', count: 0, color: '#fd7e14', priority: 3 },
        { level: 'Low', count: 0, color: '#28a745', priority: 4 }
      ];

      this.isLoading = false;
      this.cdr.markForCheck();
    }, 500);
  }
}
