import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../../../../general/feature/feature.module';
import { RatesFeatureComponent } from './rates-feature.component';

@NgModule({
  declarations: [
    RatesFeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
  ],
  exports: [
    RatesFeatureComponent
  ]
})
export class RatesFeatureModule { }
