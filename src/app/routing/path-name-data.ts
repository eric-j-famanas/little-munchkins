import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { DayToDayComponent } from '../pages/day-to-day/day-to-day.component';
import { FacilitiesComponent } from '../pages/facilities/facilities.component';
import { HomeComponent } from '../pages/home/home.component';
import { PlansComponent } from '../pages/plans/plans.component';
import { PoliciesComponent } from '../pages/policies/policies.component';
import { formatName } from '../utilities/string-formatters';

export enum PathNames {
  home = 'home',
  about = 'about',
  dayToDay = 'day-to-day',
  plans = 'plans',
  facilities = 'facilities',
  policies = 'policies'
}

export interface PathData {
  viewName: string;
  icon: string;
}

export const pathNameDataSet: Map<string, PathData> = new Map([
  [
    PathNames.home,
    {
      viewName: formatName(PathNames.home),
      icon: 'home',
    }
  ],
  [
    PathNames.about,
    {
      viewName: formatName(PathNames.about),
      icon: 'info',
    }
  ],
  [
    PathNames.dayToDay,
    {
      viewName: formatName(PathNames.dayToDay),
      icon: 'play_for_work',
    }
  ],
  [
    PathNames.plans,
    {
      viewName: formatName(PathNames.plans),
      icon: 'query_builder',
    }
  ],
  [
    PathNames.facilities,
    {
      viewName: formatName(PathNames.facilities),
      icon: 'business',
    }
  ],
  [
    PathNames.policies,
    {
      viewName: formatName(PathNames.policies),
      icon: 'assignment',
    }
  ],
]);

export const pageRoutes: Routes = [
  { path: PathNames.about, component: AboutComponent },
  { path: PathNames.dayToDay, component: DayToDayComponent },
  { path: PathNames.plans, component: PlansComponent },
  { path: PathNames.facilities, component: FacilitiesComponent },
  { path: PathNames.policies, component: PoliciesComponent },
];
