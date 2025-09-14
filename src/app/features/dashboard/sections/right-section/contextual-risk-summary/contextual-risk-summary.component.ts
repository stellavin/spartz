import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskLevelInfo, RiskLevel, RISK_LEVEL_CONFIG } from '../models/asset.interface';

/**
 * Component for displaying contextual risk summary with visual gauge
 */
@Component({
  selector: 'app-contextual-risk-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contextual-risk-summary.component.html',
  styleUrls: ['./contextual-risk-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextualRiskSummaryComponent implements OnInit {
  /** Risk summary data */
  @Input() riskSummary: RiskLevelInfo[] = [];
  
  /** Loading state */
  @Input() isLoading = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Initialize with default data if none provided
    if (this.riskSummary.length === 0) {
      this.loadDefaultRiskSummary();
    }
  }

  /**
   * Get critical risk count for the circular gauge
   */
  getCriticalCount(): number {
    const criticalRisk = this.riskSummary.find(risk => risk.level === 'Critical');
    return criticalRisk ? criticalRisk.count : 0;
  }

  /**
   * Get total risk count across all levels
   */
  getTotalCount(): number {
    return this.riskSummary.reduce((sum, risk) => sum + risk.count, 0);
  }

  /**
   * Get sorted risk summary (by priority)
   */
  get sortedRiskSummary(): RiskLevelInfo[] {
    return [...this.riskSummary].sort((a, b) => a.priority - b.priority);
  }

  /**
   * Get CSS class for risk level dot
   */
  getRiskLevelDotClass(level: RiskLevel): string {
    return `legend-dot legend-dot--${level.toLowerCase()}`;
  }

  /**
   * Check if there are any risks
   */
  get hasRisks(): boolean {
    return this.getTotalCount() > 0;
  }

  /**
   * Get gauge percentage (for future enhancement with progress circle)
   */
  get gaugePercentage(): number {
    const total = this.getTotalCount();
    if (total === 0) return 0;
    return Math.round((this.getCriticalCount() / total) * 100);
  }

  /**
   * TrackBy function for ngFor to optimize rendering performance
   */
  trackByRiskLevel(_index: number, risk: RiskLevelInfo): RiskLevel {
    return risk.level;
  }

  /**
   * Load default risk summary data
   * In a real application, this would come from a service
   */
  private loadDefaultRiskSummary(): void {
    this.riskSummary = [
      { ...RISK_LEVEL_CONFIG.Critical, count: 2 },
      { ...RISK_LEVEL_CONFIG.High, count: 0 },
      { ...RISK_LEVEL_CONFIG.Medium, count: 0 },
      { ...RISK_LEVEL_CONFIG.Low, count: 0 }
    ];
    this.cdr.markForCheck();
  }
}
