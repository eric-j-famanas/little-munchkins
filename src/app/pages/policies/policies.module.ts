import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTemplateModule } from '../../general/content-template/content-template.module';
import { PoliciesComponent } from './policies.component';

@NgModule({
  declarations: [PoliciesComponent],
  imports: [
    CommonModule,
    ContentTemplateModule,
  ]
})
export class PoliciesModule { }
