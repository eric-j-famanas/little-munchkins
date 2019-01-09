import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  exports: [
    FeatureComponent,
  ]
})
export class FeatureModule { }
