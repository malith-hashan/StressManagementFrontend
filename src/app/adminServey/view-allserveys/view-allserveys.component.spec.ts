import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllserveysComponent } from './view-allserveys.component';

describe('ViewAllserveysComponent', () => {
  let component: ViewAllserveysComponent;
  let fixture: ComponentFixture<ViewAllserveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllserveysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllserveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
