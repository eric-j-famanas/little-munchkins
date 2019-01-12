import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { PlanCalculatorDialogComponent } from './plan-calculator-dialog.component';
import { PlanCalculatorComponent } from './plan-calculator.component';

@NgModule({
  declarations: [
    PlanCalculatorComponent,
    PlanCalculatorDialogComponent
  ],
  entryComponents: [
    PlanCalculatorDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PlanCalculatorComponent,
  ]
})
export class PlanCalculatorModule {
}
