import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { PlanCalculatorDialogComponent } from './dialog/plan-calculator-dialog.component';
import { PlanCalculatorComponent } from './component/plan-calculator.component';

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
    FormsModule,
    MaterialModule,
  ],
  exports: [
    PlanCalculatorComponent,
  ]
})
export class PlanCalculatorModule {
}
