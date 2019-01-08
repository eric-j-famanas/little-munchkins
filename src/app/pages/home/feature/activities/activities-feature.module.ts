import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../../../../general/feature/feature.module';
import { ActivitiesFeatureComponent } from './activities-feature.component';

@NgModule({
  declarations: [
    ActivitiesFeatureComponent,
  ],
  imports: [
    CommonModule,
    FeatureModule,
  ],
  exports: [
    ActivitiesFeatureComponent,
  ]
})
export class ActivitiesFeatureModule { }
