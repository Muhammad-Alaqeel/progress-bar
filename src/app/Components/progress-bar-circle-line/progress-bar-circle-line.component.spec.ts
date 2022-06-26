import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarCircleLineComponent } from './progress-bar-circle-line.component';

describe('ProgressBarCircleLineComponent', () => {
  let component: ProgressBarCircleLineComponent;
  let fixture: ComponentFixture<ProgressBarCircleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarCircleLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarCircleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
