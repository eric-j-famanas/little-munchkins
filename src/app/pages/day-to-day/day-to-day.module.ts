import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { LightboxWrapperModule } from '../../general/lightbox-wrapper/lightbox-wrapper.module';
import { DayToDayComponent } from './day-to-day.component';

@NgModule({
  declarations: [
    DayToDayComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    LightboxWrapperModule,
  ],
  exports: [
    DayToDayComponent
  ]
})
export class DayToDayModule { }
