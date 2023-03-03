import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuectionComponent } from './add-quection.component';

describe('AddQuectionComponent', () => {
  let component: AddQuectionComponent;
  let fixture: ComponentFixture<AddQuectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
