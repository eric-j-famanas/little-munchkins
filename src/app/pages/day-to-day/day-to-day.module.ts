import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { DayToDayComponent } from './day-to-day.component';

@NgModule({
  declarations: [
    DayToDayComponent
  ],
  imports: [
    CommonModule,
    ContentModule
  ],
  exports: [
    DayToDayComponent
  ]
})
export class DayToDayModule { }
