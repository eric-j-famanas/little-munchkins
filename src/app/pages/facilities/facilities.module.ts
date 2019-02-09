import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { LightboxWrapperModule } from '../../general/lightbox-wrapper/lightbox-wrapper.module';
import { FacilitiesComponent } from './facilities.component';

@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    LightboxWrapperModule,
  ],
  exports: [
    FacilitiesComponent
  ]
})
export class FacilitiesModule { }
