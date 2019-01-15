import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentTemplateModule } from '../../general/content-template/content-template.module';
import { PlanCalculatorModule } from './plan-calculator/plan-calculator.module';
import { PlansComponent } from './plans.component';

@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlanCalculatorModule,
    ContentTemplateModule,
  ]
})
export class PlansModule {
}
