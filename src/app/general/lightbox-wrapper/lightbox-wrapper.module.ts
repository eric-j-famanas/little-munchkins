import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { MaterialModule } from '../../material/material.module';
import { LightboxWrapperComponent } from './lightbox-wrapper.component';

@NgModule({
  declarations: [
    LightboxWrapperComponent
  ],
  imports: [
    CommonModule,
    LightboxModule,
    MaterialModule,
  ],
  exports: [
    LightboxWrapperComponent
  ]
})
export class LightboxWrapperModule {
}

