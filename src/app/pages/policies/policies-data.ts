import { IContentImage } from '../../general/content/content-image/content-image';

export const policiesContentImage: IContentImage = {
  default: 'assets/banners/policies/policies_main.jpg',
  GT_LG: 'assets/banners/policies/policies_GT_LG.jpg',
  GT_MD: 'assets/banners/policies/policies_GT_MD.jpg',
  GT_SM: 'assets/banners/policies/policies_GT_SM.jpg',
  GT_XS: 'assets/banners/policies/policies_GT_XS.jpg',
  XS: 'assets/banners/policies/policies_XS.jpg',
  alt: 'Little Munchkins Policies'
};

export interface IPoliciesData {
  pdfTitle: string;
  pdfLink: string;
}

export const policiesData: IPoliciesData[] = [
  {
    pdfTitle: 'Health and Safety Policy - 2018',
    pdfLink: 'assets/policies/health_and_safety_policy_2018.pdf',
  },
  {
    pdfTitle: 'Safeguarding Policy - 2018',
    pdfLink: 'assets/policies/safeguarding_policy_2018.pdf',
  },
  {
    pdfTitle: 'Equalities Policy - 2018',
    pdfLink: 'assets/policies/equalities_policy_2018.pdf',
  }
];
