import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NodeData {
  id: string;
  label: string;
  type: 'user' | 'server';
  riskLevel?: 'critical' | 'warning' | 'safe';
  ipAddress?: string;
  hasUserOverlay?: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  popupType?: 'type1' | 'type2' | 'type3';
}

export interface PopoverPosition {
  x: number;
  y: number;
  visible: boolean;
}

@Component({
  selector: 'app-node-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-popover.component.html',
  styleUrls: ['./node-popover.component.scss']
})
export class NodePopoverComponent implements OnInit {
  @Input() node: NodeData | null = null;
  @Input() position: PopoverPosition = { x: 0, y: 0, visible: false };
  @Input() showCloseButton: boolean = true;
  @Input() customContent: boolean = false;
  
  @Output() close = new EventEmitter<void>();
  @Output() hover = new EventEmitter<void>();
  @Output() leave = new EventEmitter<void>();

  ngOnInit() {
    // Component initialization
  }

  onClose() {
    this.close.emit();
  }

  onHover() {
    this.hover.emit();
  }

  onLeave() {
    this.leave.emit();
  }

  getRiskLevelColor(riskLevel?: string): string {
    switch (riskLevel) {
      case 'critical': return '#EF5350';
      case 'warning': return '#FFA726';
      case 'safe': return '#66BB6A';
      default: return '#999';
    }
  }

  getRiskLevelText(riskLevel?: string): string {
    switch (riskLevel) {
      case 'critical': return 'Critical';
      case 'warning': return 'Warning';
      case 'safe': return 'Safe';
      default: return 'Unknown';
    }
  }

  getRiskLevelClass(riskLevel?: string): string {
    return `risk-${riskLevel || 'unknown'}`;
  }
}
