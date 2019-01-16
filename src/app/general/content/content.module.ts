import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateComponent } from './content-template/content-template.component';
import { ContentParagraphComponent } from './content-parapgraph/content-paragraph.component';

@NgModule({
  declarations: [
    ContentTemplateComponent,
    ContentParagraphComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentTemplateComponent,
    ContentParagraphComponent,
  ]
})
export class ContentModule { }
