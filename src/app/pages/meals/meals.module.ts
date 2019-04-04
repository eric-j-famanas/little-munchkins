import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { GeneralModule } from '../../general/general.module';
import { LightboxWrapperModule } from '../../general/lightbox-wrapper/lightbox-wrapper.module';
import { MealsComponent } from './meals.component';

@NgModule({
  declarations: [
    MealsComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    LightboxWrapperModule,
    GeneralModule,
  ],
  exports: [
    MealsComponent
  ]
})
export class MealsModule { }
