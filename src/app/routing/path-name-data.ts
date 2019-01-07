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
