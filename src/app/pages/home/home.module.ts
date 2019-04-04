import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterContentModule } from '../../general/footer/footer-content/footer-content.module';
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
    FooterContentModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
