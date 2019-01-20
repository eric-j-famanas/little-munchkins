import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ProfileCardComponent } from './profile-card.component';

@NgModule({
  declarations: [
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProfileCardComponent,
  ]
})
export class ProfileCardModule { }
