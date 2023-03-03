import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServeyHomeComponent } from './admin-servey-home.component';

describe('AdminServeyHomeComponent', () => {
  let component: AdminServeyHomeComponent;
  let fixture: ComponentFixture<AdminServeyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServeyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServeyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
