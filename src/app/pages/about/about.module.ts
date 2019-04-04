import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { GeneralModule } from '../../general/general.module';
import { LightboxWrapperModule } from '../../general/lightbox-wrapper/lightbox-wrapper.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    LightboxWrapperModule,
    GeneralModule,
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
