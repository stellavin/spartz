import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideNavBarComponent } from './side-nav-bar.component';

describe('SideNavBarComponent', () => {
  let component: SideNavBarComponent;
  let fixture: ComponentFixture<SideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavBarComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle collapse state', () => {
    const initialState = component.isCollapsed();
    component.onToggleCollapse();
    expect(component.isCollapsed()).toBe(!initialState);
  });

  it('should have navigation items', () => {
    expect(component.navItems.length).toBeGreaterThan(0);
  });

  it('should have user profile data', () => {
    expect(component.userProfile.name).toBeDefined();
    expect(component.userProfile.role).toBeDefined();
  });
});
