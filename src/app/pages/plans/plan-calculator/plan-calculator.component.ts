import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PlanCalculatorDialogComponent } from './plan-calculator-dialog.component';

@Component({
  selector: 'app-plan-calculator',
  template: `
    <button mat-button (click)="openDialog()">Plan Calculator</button>
  `,
  styleUrls: ['./plan-calculator.component.less']
})
export class PlanCalculatorComponent {
  constructor(public dialog: MatDialog) {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(PlanCalculatorDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Calculator closed');
    });
  }
}
