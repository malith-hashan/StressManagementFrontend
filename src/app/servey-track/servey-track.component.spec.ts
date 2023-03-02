import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTrackComponent } from './servey-track.component';

describe('ServeyTrackComponent', () => {
  let component: ServeyTrackComponent;
  let fixture: ComponentFixture<ServeyTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeyTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
