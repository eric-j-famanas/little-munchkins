import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-calculator-dialog',
  template: `
    <h2 mat-dialog-title>Childcare Cost Calculator</h2>
    <mat-dialog-content class="mat-typography">
      <h3>Estimate your monthly costs!</h3>
      <h6>** Calculator is used for estimates only.
        <br/>
        Please discuss with Little Munchkins for actual cost.
      </h6>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./plan-calculator-dialog.component.less']
})
export class PlanCalculatorDialogComponent {
}
