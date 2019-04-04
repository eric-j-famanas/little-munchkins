import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterContentModule } from './footer-content/footer-content.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterContentModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule {
}
