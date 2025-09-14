import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NodeData {
  id: string;
  label: string;
  type: 'user' | 'server';
  riskLevel?: 'critical' | 'warning' | 'safe';
  ipAddress?: string;
  hasUserOverlay?: boolean;
}

interface PopoverPosition {
  x: number;
  y: number;
  visible: boolean;
}

@Component({
  selector: 'app-graph-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})
export class GraphPanelComponent implements OnInit {
  popover: PopoverPosition = { x: 0, y: 0, visible: false };
  selectedNode: NodeData | null = null;
  private hoverTimeout: any = null;

  private nodeData: NodeData[] = [
    {
      id: '1',
      label: 'Loremipsumm',
      type: 'user',
      riskLevel: 'safe',
      hasUserOverlay: true,
      ipAddress: 'FW'
    },
    {
      id: '2',
      label: 'Loremipsu',
      type: 'server',
      riskLevel: 'safe'
    },
    {
      id: '3',
      label: 'Loremipsu',
      type: 'server',
      riskLevel: 'safe'
    },
    {
      id: '4',
      label: 'Loremipsumdolorsit',
      type: 'server',
      riskLevel: 'critical',
      ipAddress: '192.168.1.1'
    },
    {
      id: '5',
      label: 'Loremipsumdolorsit002',
      type: 'server',
      riskLevel: 'critical',
      ipAddress: '192.168.1.2'
    }
  ];

  ngOnInit() {
    // Component initialization
  }

  onNodeHover(nodeId: string, event: MouseEvent) {
    // Clear any existing timeout
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }

    this.selectedNode = this.nodeData.find(node => node.id === nodeId) || null;
    
    if (this.selectedNode) {
      // Position popover to the right of the mouse cursor to avoid interference
      const offsetX = 20;
      const offsetY = -20;
      
      this.popover = {
        x: event.pageX + offsetX,
        y: event.pageY + offsetY,
        visible: true
      };
    }
  }

  onNodeLeave() {
    // Add a small delay before hiding to prevent rapid show/hide
    this.hoverTimeout = setTimeout(() => {
      this.popover.visible = false;
      this.selectedNode = null;
    }, 100);
  }

  onPopoverHover() {
    // Clear timeout when hovering over popover to keep it visible
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  onPopoverLeave() {
    // Hide popover when leaving it
    this.popover.visible = false;
    this.selectedNode = null;
  }

  closePopover() {
    this.popover.visible = false;
    this.selectedNode = null;
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
}