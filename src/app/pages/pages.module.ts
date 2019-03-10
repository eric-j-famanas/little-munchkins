import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamModule } from './team/team.module';
import { DayToDayModule } from './day-to-day/day-to-day.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { HomeModule } from './home/home.module';
import { FeesModule } from './fees/fees.module';
import { PoliciesModule } from './policies/policies.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    TeamModule,
    DayToDayModule,
    FacilitiesModule,
    FeesModule,
    PoliciesModule,
  ],
  exports: [
    HomeModule,
    TeamModule,
    DayToDayModule,
    FacilitiesModule,
    FeesModule,
    PoliciesModule,
  ]
})
export class PagesModule { }
