import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphPanelComponent } from './graph-panel.component';

describe('GraphPanelComponent', () => {
  let component: GraphPanelComponent;
  let fixture: ComponentFixture<GraphPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty popover state', () => {
    expect(component.popover.visible).toBeFalse();
    expect(component.selectedNode).toBeNull();
  });

  it('should handle node click events', () => {
    const mockEvent = new MouseEvent('click', { clientX: 100, clientY: 100 });
    spyOn(component, 'onNodeClick').and.callThrough();
    
    component.onNodeClick('1', mockEvent);
    
    expect(component.onNodeClick).toHaveBeenCalledWith('1', mockEvent);
  });

  it('should handle node hover events', () => {
    const mockEvent = new MouseEvent('mouseenter', { clientX: 100, clientY: 100 });
    spyOn(component, 'onNodeHover').and.callThrough();
    
    component.onNodeHover('1', mockEvent);
    
    expect(component.onNodeHover).toHaveBeenCalledWith('1', mockEvent);
  });

  it('should close popover when closePopover is called', () => {
    component.popover.visible = true;
    component.selectedNode = { id: '1', label: 'Test', type: 'server' };
    
    component.closePopover();
    
    expect(component.popover.visible).toBeFalse();
    expect(component.selectedNode).toBeNull();
  });

  it('should return correct node classes', () => {
    component.graphState.selectedNodeId = '1';
    component.graphState.hoveredNodeId = '2';
    
    const selectedClasses = component.getNodeClasses('1');
    const hoveredClasses = component.getNodeClasses('2');
    const normalClasses = component.getNodeClasses('3');
    
    expect(selectedClasses).toContain('selected');
    expect(hoveredClasses).toContain('hovered');
    expect(normalClasses).not.toContain('selected');
    expect(normalClasses).not.toContain('hovered');
  });
});
