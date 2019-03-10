import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeesCalculatorDialogComponent } from '../dialog/fees-calculator-dialog.component';

@Component({
  selector: 'app-plan-calculator',
  template: `
    <button mat-button (click)="openDialog()">Plan Calculator</button>
  `,
  styleUrls: ['./fees-calculator.component.less']
})
export class FeesCalculatorComponent {
  constructor(public dialog: MatDialog) {
  }

  public openDialog() {
    this.dialog.open(FeesCalculatorDialogComponent);
  }
}
