import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    HomeFeatureModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
