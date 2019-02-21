import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    FeatureComponent,
  ]
})
export class FeatureModule { }
