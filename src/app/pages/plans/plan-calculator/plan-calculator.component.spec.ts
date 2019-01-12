import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCalculatorComponent } from './plan-calculator.component';

describe('PlanCalculatorComponent', () => {
  let component: PlanCalculatorComponent;
  let fixture: ComponentFixture<PlanCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
