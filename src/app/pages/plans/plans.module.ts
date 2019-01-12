import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanCalculatorModule } from './plan-calculator/plan-calculator.module';
import { PlansComponent } from './plans.component';

@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlanCalculatorModule,
  ],
  exports: [
    PlansComponent,
  ]
})
export class PlansModule {
}
