import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatesFeatureModule } from './rates/rates-feature.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatesFeatureModule,
  ],
  exports: [
    RatesFeatureModule,
  ]
})
export class HomeFeatureModule {
}
