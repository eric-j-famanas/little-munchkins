import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../../../../general/feature/feature.module';
import { ServicesFeatureComponent } from './services-feature.component';

@NgModule({
  declarations: [
    ServicesFeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
  ],
  exports: [
    ServicesFeatureComponent,
  ]
})
export class ServicesFeatureModule { }
