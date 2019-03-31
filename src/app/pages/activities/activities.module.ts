import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { GeneralModule } from '../../general/general.module';
import { LightboxWrapperModule } from '../../general/lightbox-wrapper/lightbox-wrapper.module';
import { MaterialModule } from '../../material/material.module';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    MaterialModule,
    ContentModule,
    LightboxWrapperModule,
  ],
  exports: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
