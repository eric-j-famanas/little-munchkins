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

export const policiesParagraphOne: string = 'We at Little Munchkins follow a strict set of rules to ensure your ' +
  'children are growing up in both a safe and productive environment. We believe in fairness, equal treatment, and respect for all.' +
  'We are also obligated to place the safety of children at the forefront and will do our best to carry it out.';

export const policiesParagraphTwo: string = 'If you have any questions regarding our policies' +
  'or have any concerns, please bring them to the attention of the site manager.';
