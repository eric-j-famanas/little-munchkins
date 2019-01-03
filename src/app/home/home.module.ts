import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
