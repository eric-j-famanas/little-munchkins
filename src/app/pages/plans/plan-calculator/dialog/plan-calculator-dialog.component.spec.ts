import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCalculatorDialogComponent } from './plan-calculator-dialog.component';

describe('PlanCalculatorDialogComponent', () => {
  let component: PlanCalculatorDialogComponent;
  let fixture: ComponentFixture<PlanCalculatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCalculatorDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCalculatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
