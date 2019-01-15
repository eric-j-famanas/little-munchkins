import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateModule } from '../../general/content-template/content-template.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    ContentTemplateModule,
  ],
  exports: [
    AboutComponent,
  ]
})
export class AboutModule { }
