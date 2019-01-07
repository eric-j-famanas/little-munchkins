import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DayToDayComponent } from './pages/day-to-day/day-to-day.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { HomeComponent } from './pages/home/home.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PoliciesComponent } from './pages/policies/policies.component';

export const pageRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'day-to-day', component: DayToDayComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'policies', component: PoliciesComponent },
];

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...pageRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
