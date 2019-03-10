import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesCalculatorComponent } from './fees-calculator.component';

describe('FeesCalculatorComponent', () => {
  let component: FeesCalculatorComponent;
  let fixture: ComponentFixture<FeesCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeesCalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
