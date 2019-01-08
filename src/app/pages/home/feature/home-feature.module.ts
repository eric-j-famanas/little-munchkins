import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivitiesFeatureModule } from './activities/activities-feature.module';
import { RatesFeatureModule } from './rates/rates-feature.module';
import { ServicesFeatureModule } from './services/services-feature.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatesFeatureModule,
    ServicesFeatureModule,
    ActivitiesFeatureModule,
  ],
  exports: [
    RatesFeatureModule,
    ServicesFeatureModule,
    ActivitiesFeatureModule,
  ]
})
export class HomeFeatureModule {
}
