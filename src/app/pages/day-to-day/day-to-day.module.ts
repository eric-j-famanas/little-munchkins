import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateModule } from '../../general/content-template/content-template.module';
import { DayToDayComponent } from './day-to-day.component';

@NgModule({
  declarations: [
    DayToDayComponent
  ],
  imports: [
    CommonModule,
    ContentTemplateModule
  ],
  exports: [
    DayToDayComponent
  ]
})
export class DayToDayModule { }
