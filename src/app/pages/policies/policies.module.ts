import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { GeneralModule } from '../../general/general.module';
import { PdfWrapperModule } from '../../general/pdf-wrapper/pdf-wrapper.module';
import { PoliciesComponent } from './policies.component';

@NgModule({
  declarations: [
    PoliciesComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    PdfWrapperModule,
    GeneralModule
  ],
  exports: [
    PoliciesComponent,
  ]
})
export class PoliciesModule { }
