import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2adminComponent } from './home2admin.component';

describe('Home2adminComponent', () => {
  let component: Home2adminComponent;
  let fixture: ComponentFixture<Home2adminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home2adminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
