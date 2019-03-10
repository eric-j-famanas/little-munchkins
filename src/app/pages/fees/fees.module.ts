import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentModule } from '../../general/content/content.module';
import { FeesCalculatorModule } from './plan-calculator/fees-calculator.module';
import { FeesComponent } from './fees.component';

@NgModule({
  declarations: [
    FeesComponent
  ],
  imports: [
    CommonModule,
    FeesCalculatorModule,
    ContentModule,
  ]
})
export class FeesModule {
}
