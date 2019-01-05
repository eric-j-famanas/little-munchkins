import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { SidenavListComponent } from './sidenav-list.component';

@NgModule({
  declarations: [
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SidenavListComponent,
  ]
})
export class SidenavListModule {
}
