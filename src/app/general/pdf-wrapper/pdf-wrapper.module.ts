import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { PdfWrapperComponent } from './pdf-wrapper.component';

@NgModule({
  declarations: [
    PdfWrapperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PdfWrapperComponent,
  ]
})
export class PdfWrapperModule { }
