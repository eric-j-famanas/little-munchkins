import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateModule } from '../../general/content-template/content-template.module';
import { FacilitiesComponent } from './facilities.component';

@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    ContentTemplateModule
  ],
  exports: [
    FacilitiesComponent
  ]
})
export class FacilitiesModule { }
