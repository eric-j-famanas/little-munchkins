import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralModule } from '../../general/general.module';
import { MaterialModule } from '../../material/material.module';
import { HomeFeatureModule } from './feature/home-feature.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeFeatureModule,
    GeneralModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
