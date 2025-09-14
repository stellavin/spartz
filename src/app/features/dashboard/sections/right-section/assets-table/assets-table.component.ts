import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asset, RiskLevel } from '../models/asset.interface';

/**
 * Component for displaying a table of assets with their risk information
 */
@Component({
  selector: 'app-assets-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsTableComponent implements OnInit {
  /** Array of assets to display */
  @Input() assets: Asset[] = [];
  
  /** Current page for pagination */
  currentPage = 1;
  
  /** Number of items per page */
  itemsPerPage = 10;
  
  /** Loading state */
  isLoading = false;

  constructor() {}

  ngOnInit(): void {
    // Initialize component
    if (this.assets.length === 0) {
      this.loadDefaultAssets();
    }
  }

  /**
   * Get assets for current page
   */
  get paginatedAssets(): Asset[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.assets.slice(startIndex, endIndex);
  }

  /**
   * Get pagination info text
   */
  get paginationInfo(): string {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.assets.length);
    return `Showing ${start}-${end} of ${this.assets.length}`;
  }

  /**
   * Check if previous page is available
   */
  get canGoToPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  /**
   * Check if next page is available
   */
  get canGoToNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  /**
   * Get total number of pages
   */
  get totalPages(): number {
    return Math.ceil(this.assets.length / this.itemsPerPage);
  }

  /**
   * Go to previous page
   */
  goToPreviousPage(): void {
    if (this.canGoToPreviousPage) {
      this.currentPage--;
    }
  }

  /**
   * Go to next page
   */
  goToNextPage(): void {
    if (this.canGoToNextPage) {
      this.currentPage++;
    }
  }

  /**
   * Get CSS class for risk level badge
   */
  getRiskLevelClass(riskLevel: RiskLevel): string {
    return `risk-tag risk-tag--${riskLevel.toLowerCase()}`;
  }

  /**
   * TrackBy function for ngFor to optimize rendering performance
   */
  trackByAssetId(_index: number, asset: Asset): string {
    return asset.id;
  }

  /**
   * Load default assets for demo purposes
   * In a real application, this would come from a service
   */
  private loadDefaultAssets(): void {
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
  }
}
