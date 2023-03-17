import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServeyViewByAdminComponent } from './user-servey-view-by-admin.component';

describe('UserServeyViewByAdminComponent', () => {
  let component: UserServeyViewByAdminComponent;
  let fixture: ComponentFixture<UserServeyViewByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServeyViewByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServeyViewByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
