import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    FooterModule,
  ],
  exports: [
    LayoutModule,
    FooterModule,
  ]
})
export class GeneralModule { }
