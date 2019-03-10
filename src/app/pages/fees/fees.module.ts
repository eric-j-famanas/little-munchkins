import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentModule } from '../../general/content/content.module';
import { PlanCalculatorModule } from './plan-calculator/plan-calculator.module';
import { FeesComponent } from './fees.component';

@NgModule({
  declarations: [
    FeesComponent
  ],
  imports: [
    CommonModule,
    PlanCalculatorModule,
    ContentModule,
  ]
})
export class FeesModule {
}
