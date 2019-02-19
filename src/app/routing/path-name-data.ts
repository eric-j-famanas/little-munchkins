import { Routes } from '@angular/router';
import { IContentImage } from '../general/content/content-image/content-image';
import { AboutComponent } from '../pages/about/about.component';
import { DayToDayComponent } from '../pages/day-to-day/day-to-day.component';
import { FacilitiesComponent } from '../pages/facilities/facilities.component';
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
  { path: PathNames.plans, component: PlansComponent },
  { path: PathNames.facilities, component: FacilitiesComponent },
  { path: PathNames.dayToDay, component: DayToDayComponent },
  { path: PathNames.policies, component: PoliciesComponent },
];

const full = 'assets/logo/logo_header_full.png';
const mobile = 'assets/logo/logo_header_mobile.png';

export const logoImage: IContentImage = {
  default: mobile,
  GT_LG: full,
  GT_MD: full,
  GT_SM: mobile,
  GT_XS: mobile,
  XS: mobile,
  alt: 'Little Munchkins'
};
