import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ContentTemplateComponent } from './content-template/content-template.component';
import { ContentParagraphComponent } from './content-parapgraph/content-paragraph.component';
import { ContentImageComponent } from './content-image/content-image.component';

@NgModule({
  declarations: [
    ContentTemplateComponent,
    ContentParagraphComponent,
    ContentImageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ContentTemplateComponent,
    ContentParagraphComponent,
    ContentImageComponent,
  ]
})
export class ContentModule { }
