import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SidenavListComponent } from './sidenav-list.component';

@NgModule({
  declarations: [
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    SidenavListComponent,
  ]
})
export class SidenavListModule {
}
