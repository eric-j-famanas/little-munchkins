import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { AppRoutingModule } from '../../../../routing/app-routing.module';
import { RatesFeatureComponent } from './rates-feature.component';

@NgModule({
  declarations: [
    RatesFeatureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    RatesFeatureComponent
  ]
})
export class RatesFeatureModule {
}
