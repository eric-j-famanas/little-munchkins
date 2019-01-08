import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from './feature/feature.module';
import { FooterModule } from './footer/footer.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    FooterModule,
    FeatureModule,
  ],
  exports: [
    LayoutModule,
    FooterModule,
    FeatureModule,
  ]
})
export class GeneralModule { }
