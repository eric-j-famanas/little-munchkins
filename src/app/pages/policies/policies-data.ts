import { IContentImage } from '../../general/content/content-image/content-image';

export const policiesContentImage: IContentImage = {
  default: 'assets/banners/plans/plans_main.jpg',
  GT_LG: 'assets/banners/plans/dayToDay_GT_LG.jpg',
  GT_MD: 'assets/banners/plans/dayToDay_GT_MD.jpg',
  GT_SM: 'assets/banners/plans/dayToDay_GT_SM.jpg',
  GT_XS: 'assets/banners/plans/dayToDay_GT_XS.jpg',
  XS: 'assets/banners/plans/dayToDay_XS.jpg',
  alt: 'Little Munchkins Policies'
};

export interface IPoliciesData {
  pdfTitle: string;
  pdfLink: string;
}

export const policiesData: IPoliciesData[] = [
  {
    pdfTitle: 'Health and Safety Policy - 2018',
    pdfLink: 'assets/plans/health_and_safety_policy_2018.pdf',
  },
  {
    pdfTitle: 'Safeguarding Policy - 2018',
    pdfLink: 'assets/plans/safeguarding_policy_2018.pdf',
  },
  {
    pdfTitle: 'Equalities Policy - 2018',
    pdfLink: 'assets/plans/equalities_policy_2018.pdf',
  }
];
