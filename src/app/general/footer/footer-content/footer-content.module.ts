import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContentComponent } from './footer-content.component';

@NgModule({
  declarations: [
    FooterContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterContentComponent,
  ]
})
export class FooterContentModule { }
