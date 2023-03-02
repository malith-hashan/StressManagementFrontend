import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuectionsComponent } from './edit-quections.component';

describe('EditQuectionsComponent', () => {
  let component: EditQuectionsComponent;
  let fixture: ComponentFixture<EditQuectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQuectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
