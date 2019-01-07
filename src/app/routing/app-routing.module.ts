import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { DayToDayComponent } from '../pages/day-to-day/day-to-day.component';
import { FacilitiesComponent } from '../pages/facilities/facilities.component';
import { HomeComponent } from '../pages/home/home.component';
import { PlansComponent } from '../pages/plans/plans.component';
import { PoliciesComponent } from '../pages/policies/policies.component';
import { PathNames } from './path-name-data';

export const pageRoutes: Routes = [
  { path: PathNames.home, component: HomeComponent },
  { path: PathNames.about, component: AboutComponent },
  { path: PathNames.dayToDay, component: DayToDayComponent },
  { path: PathNames.plans, component: PlansComponent },
  { path: PathNames.facilities, component: FacilitiesComponent },
  { path: PathNames.policies, component: PoliciesComponent },
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
