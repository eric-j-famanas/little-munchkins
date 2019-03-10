import { Routes } from '@angular/router';
import { IContentImage } from '../general/content/content-image/content-image';
import { AboutComponent } from '../pages/about/about.component';
import { DayToDayComponent } from '../pages/day-to-day/day-to-day.component';
import { FacilitiesComponent } from '../pages/facilities/facilities.component';
import { FeesComponent } from '../pages/fees/fees.component';
import { PoliciesComponent } from '../pages/policies/policies.component';
import { formatName } from '../utilities/string-formatters';

export enum PathNames {
  home = 'home',
  about = 'about',
  dayToDay = 'day-to-day',
  fees = 'fees',
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
    PathNames.fees,
    {
      viewName: formatName(PathNames.fees),
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
  { path: PathNames.fees, component: FeesComponent },
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
