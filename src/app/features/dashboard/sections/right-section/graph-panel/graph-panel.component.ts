import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodePopoverComponent } from '../../../../../shared/components/node-popover/node-popover.component';
import type { NodeData, PopoverPosition } from '../../../../../shared/components/node-popover/node-popover.component';

// Remove duplicate interfaces - now imported from node-popover component

interface GraphState {
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
  isDragging: boolean;
  dragStartX: number;
  dragStartY: number;
}

@Component({
  selector: 'app-graph-panel',
  standalone: true,
  imports: [CommonModule, NodePopoverComponent],
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})
export class GraphPanelComponent implements OnInit {
  popover: PopoverPosition = { x: 0, y: 0, visible: false };
  selectedNode: NodeData | null = null;
  private hoverTimeout: any = null;
  private clickTimeout: any = null;
  
  graphState: GraphState = {
    selectedNodeId: null,
    hoveredNodeId: null,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0
  };

  private nodeData: NodeData[] = [
    {
      id: '1',
      label: 'Loremipsumm',
      type: 'user',
      riskLevel: 'safe',
      hasUserOverlay: true,
      ipAddress: 'FW',
      x: 100,
      y: 100,
      width: 56,
      height: 56,
      popupType: 'type1' // First image popup
    },
    {
      id: '2',
      label: 'Loremipsu',
      type: 'server',
      riskLevel: 'safe',
      x: 300,
      y: 100,
      width: 56,
      height: 56,
      popupType: 'type2' // Second image popup
    },
    {
      id: '3',
      label: 'Loremipsu',
      type: 'server',
      riskLevel: 'safe',
      x: 500,
      y: 100,
      width: 56,
      height: 56,
      popupType: 'type2' // Second image popup
    },
    {
      id: '4',
      label: 'Loremipsumdolorsit',
      type: 'server',
      riskLevel: 'critical',
      ipAddress: '192.168.1.1',
      x: 700,
      y: 30,
      width: 56,
      height: 56,
      popupType: 'type3' // Third image popup
    },
    {
      id: '5',
      label: 'Loremipsumdolorsit002',
      type: 'server',
      riskLevel: 'critical',
      ipAddress: '192.168.1.2',
      x: 700,
      y: 170,
      width: 56,
      height: 56,
      popupType: 'type3' // Third image popup
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

    this.graphState.hoveredNodeId = nodeId;
    this.selectedNode = this.nodeData.find(node => node.id === nodeId) || null;
    
    if (this.selectedNode) {
      // Position popover based on node position
      let offsetX = 20;
      let offsetY = -20;
      
      // For nodes 4 and 5 (right side), position popup to the left
      if (nodeId === '4' || nodeId === '5') {
        offsetX = -320; // Popup width + some margin
        offsetY = -50; // Center vertically
      }
      
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
      if (!this.graphState.selectedNodeId) {
        this.popover.visible = false;
        this.selectedNode = null;
        this.graphState.hoveredNodeId = null;
      }
    }, 100);
  }

  onNodeClick(nodeId: string, event: MouseEvent) {
    event.stopPropagation();
    
    // Clear any existing click timeout
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
    }

    // Toggle selection
    if (this.graphState.selectedNodeId === nodeId) {
      this.graphState.selectedNodeId = null;
      this.popover.visible = false;
      this.selectedNode = null;
    } else {
      this.graphState.selectedNodeId = nodeId;
      this.selectedNode = this.nodeData.find(node => node.id === nodeId) || null;
      
      if (this.selectedNode) {
        // Position popover based on node position
        let offsetX = 20;
        let offsetY = -20;
        
        // For nodes 4 and 5 (right side), position popup to the left
        if (nodeId === '4' || nodeId === '5') {
          offsetX = -320; // Popup width + some margin
          offsetY = -50; // Center vertically
        }
        
        this.popover = {
          x: event.pageX + offsetX,
          y: event.pageY + offsetY,
          visible: true
        };
      }
    }
  }

  onGraphClick(event: MouseEvent) {
    // Close popover when clicking on empty space
    if (event.target === event.currentTarget) {
      this.graphState.selectedNodeId = null;
      this.popover.visible = false;
      this.selectedNode = null;
    }
  }

  onPopoverHover() {
    // Clear timeout when hovering over popover to keep it visible
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  onPopoverLeave() {
    // Only hide popover if no node is selected
    if (!this.graphState.selectedNodeId) {
      this.popover.visible = false;
      this.selectedNode = null;
    }
  }

  closePopover() {
    this.graphState.selectedNodeId = null;
    this.popover.visible = false;
    this.selectedNode = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close popover when clicking outside
    const target = event.target as HTMLElement;
    if (!target.closest('.node') && !target.closest('.node-popover')) {
      this.graphState.selectedNodeId = null;
      this.popover.visible = false;
      this.selectedNode = null;
    }
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

  getNodeClasses(nodeId: string): string {
    const classes = ['node'];
    
    if (this.graphState.selectedNodeId === nodeId) {
      classes.push('selected');
    }
    
    if (this.graphState.hoveredNodeId === nodeId) {
      classes.push('hovered');
    }
    
    const node = this.nodeData.find(n => n.id === nodeId);
    if (node?.riskLevel) {
      classes.push(`risk-${node.riskLevel}`);
    }
    
    return classes.join(' ');
  }

  isNodeSelected(nodeId: string): boolean {
    return this.graphState.selectedNodeId === nodeId;
  }

  isNodeHovered(nodeId: string): boolean {
    return this.graphState.hoveredNodeId === nodeId;
  }

  getNodeData(nodeId: string): NodeData | undefined {
    return this.nodeData.find(node => node.id === nodeId);
  }
}