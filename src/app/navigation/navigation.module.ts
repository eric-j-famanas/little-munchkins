import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SidenavListModule } from './sidenav-list/sidenav-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SidenavListModule,
  ],
  exports: [
    HeaderModule,
    SidenavListModule,
  ]
})
export class NavigationModule {
}
