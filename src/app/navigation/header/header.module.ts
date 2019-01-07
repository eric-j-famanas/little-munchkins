import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
