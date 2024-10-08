import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentToolsListComponent } from './development-tools-list.component';

describe('DevelopmentToolsListComponent', () => {
  let component: DevelopmentToolsListComponent;
  let fixture: ComponentFixture<DevelopmentToolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentToolsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
