import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesCalculatorDialogComponent } from './fees-calculator-dialog.component';

describe('FeesCalculatorDialogComponent', () => {
  let component: FeesCalculatorDialogComponent;
  let fixture: ComponentFixture<FeesCalculatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeesCalculatorDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesCalculatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
