import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentModule } from '../../general/content/content.module';
import { PlanCalculatorModule } from './plan-calculator/plan-calculator.module';
import { PlansComponent } from './plans.component';

@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlanCalculatorModule,
    ContentModule,
  ]
})
export class PlansModule {
}
