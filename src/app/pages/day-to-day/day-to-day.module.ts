import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayToDayComponent } from './day-to-day.component';

@NgModule({
  declarations: [
    DayToDayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayToDayComponent
  ]
})
export class DayToDayModule { }
