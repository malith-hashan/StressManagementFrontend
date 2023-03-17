import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlResultComponent } from './user-al-result.component';

describe('UserAlResultComponent', () => {
  let component: UserAlResultComponent;
  let fixture: ComponentFixture<UserAlResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAlResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAlResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
