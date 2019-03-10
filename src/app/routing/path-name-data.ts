import { Routes } from '@angular/router';
import { IContentImage } from '../general/content/content-image/content-image';
import { TeamComponent } from '../pages/team/team.component';
import { MealsComponent } from '../pages/meals/meals.component';
import { AboutComponent } from '../pages/about/about.component';
import { FeesComponent } from '../pages/fees/fees.component';
import { PoliciesComponent } from '../pages/policies/policies.component';
import { formatName } from '../utilities/string-formatters';

export enum PathNames {
  home = 'home',
  team = 'team',
  meals = 'meals',
  fees = 'fees',
  about = 'about',
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
    PathNames.team,
    {
      viewName: formatName(PathNames.team),
      icon: 'info',
    }
  ],
  [
    PathNames.meals,
    {
      viewName: formatName(PathNames.meals),
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
    PathNames.about,
    {
      viewName: formatName(PathNames.about),
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
  { path: PathNames.team, component: TeamComponent },
  { path: PathNames.fees, component: FeesComponent },
  { path: PathNames.about, component: AboutComponent },
  { path: PathNames.meals, component: MealsComponent },
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
