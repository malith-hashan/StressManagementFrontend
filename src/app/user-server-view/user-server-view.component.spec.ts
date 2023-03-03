import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServerViewComponent } from './user-server-view.component';

describe('UserServerViewComponent', () => {
  let component: UserServerViewComponent;
  let fixture: ComponentFixture<UserServerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
