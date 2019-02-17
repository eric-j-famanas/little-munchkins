import { IContentImage } from '../../general/content/content-image/content-image';

export const plansContentImage: IContentImage = {
  default: 'assets/banners/plans/plans_main.jpg',
  GT_LG: 'assets/banners/plans/plans_GT_LG.jpg',
  GT_MD: 'assets/banners/plans/plans_GT_MD.jpg',
  GT_SM: 'assets/banners/plans/plans_GT_SM.jpg',
  GT_XS: 'assets/banners/plans/plans_GT_XS.jpg',
  XS: 'assets/banners/plans/plans_XS.jpg',
  alt: 'Little Munchkins Plans'
};

export const planNames: string[] = [
  'Ages 2 and under:',
  'Ages 2 to 3',
  'Preschool',
];

export const planHalfRates: number[] = [
  31.20,
  30.00,
  28.00,
];

export const planFullRates: number[] = [
  47.00,
  46.00,
  45.00,
];

export const clubName: string = 'Before and After School Club';
export const clubRate: number = 4.80;

export interface Plan {
  name: string;
  halfRate: number;
  fullRate: number;
}

export const planOptions: Plan[] = [
  {
    name: 'Ages 2 and Under',
    halfRate: 31.20,
    fullRate: 47.00,
  },
  {
    name: 'Ages 2-3',
    halfRate: 31.20,
    fullRate: 47.00,
  },
  {
    name: 'Under 2',
    halfRate: 31.20,
    fullRate: 47.00,
  },
  {
    name: 'Under 2',
    halfRate: 31.20,
    fullRate: 47.00,
  },
];
