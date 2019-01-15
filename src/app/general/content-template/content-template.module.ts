import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateComponent } from './content-template.component';

@NgModule({
  declarations: [
    ContentTemplateComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentTemplateComponent,
  ]
})
export class ContentTemplateModule { }
