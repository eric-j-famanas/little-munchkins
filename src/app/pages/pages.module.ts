import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesModule } from './activities/activities.module';
import { TeamModule } from './team/team.module';
import { MealsModule } from './meals/meals.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { FeesModule } from './fees/fees.module';
import { PoliciesModule } from './policies/policies.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    TeamModule,
    MealsModule,
    AboutModule,
    FeesModule,
    PoliciesModule,
    ActivitiesModule,
  ],
  exports: [
    HomeModule,
    TeamModule,
    MealsModule,
    AboutModule,
    FeesModule,
    PoliciesModule,
    ActivitiesModule,
  ]
})
export class PagesModule { }
