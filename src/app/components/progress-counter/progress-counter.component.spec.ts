import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCounterComponent } from './progress-counter.component';

describe('ProgressCounterComponent', () => {
  let component: ProgressCounterComponent;
  let fixture: ComponentFixture<ProgressCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
