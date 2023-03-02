import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuectionsComponent } from './view-quections.component';

describe('ViewQuectionsComponent', () => {
  let component: ViewQuectionsComponent;
  let fixture: ComponentFixture<ViewQuectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQuectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
