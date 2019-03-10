import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { FeesCalculatorComponent } from './component/fees-calculator.component';
import { FeesCalculatorDialogComponent } from './dialog/fees-calculator-dialog.component';

@NgModule({
  declarations: [
    FeesCalculatorComponent,
    FeesCalculatorDialogComponent
  ],
  entryComponents: [
    FeesCalculatorDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    FeesCalculatorComponent,
  ]
})
export class FeesCalculatorModule {
}
