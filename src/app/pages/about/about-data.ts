import { IContentImage } from '../../general/content/content-image/content-image';
import { IProfileCard } from '../../general/profile-card/profile-card';

export const aboutContentImage: IContentImage = {
  default: 'assets/banners/about/about_main.jpg',
  GT_LG: 'assets/banners/about/about_GT_LG.jpg',
  GT_MD: 'assets/banners/about/about_GT_MD.jpg',
  GT_SM: 'assets/banners/about/about_GT_SM.jpg',
  GT_XS: 'assets/banners/about/about_GT_XS.jpg',
  XS: 'assets/banners/about/about_XS.jpg',
  alt: 'Little Munchkins About'
};

export const profileRowOne: IProfileCard[] = [
  {
    src: '',
    name: 'Anna Clark',
    subtitle: 'Nursery Director'
  }
];

export const profileRowTwo: IProfileCard[] = [
  {
    src: '',
    name: 'Jodie Thrower',
    subtitle: 'Nursery Manager'
  },
  {
    src: '',
    name: 'Sara Wilkinson',
    subtitle: 'Deputy Manager'
  },
  {
    src: '',
    name: 'Monika Pilarczyk',
    subtitle: 'Nursery Chef'
  }
];

export const profileRowThree: IProfileCard[] = [
  {
    src: '',
    name: 'April Lyness',
    subtitle: 'Level 3 Practitioner'
  },
  {
    src: '',
    name: 'Jessica Lyness',
    subtitle: 'Level 3 Practitioner'
  },
  {
    src: '',
    name: 'Lisa Avery',
    subtitle: 'Level 3 Practitioner'
  }
];

export const profileRowFour: IProfileCard[] = [
  {
    src: '',
    name: 'Ashleigh North',
    subtitle: 'Level 3 Practitioner'
  },
  {
    src: '',
    name: 'Shannon Rodgers',
    subtitle: 'Level 3 Apprentice'
  },
  {
    src: '',
    name: 'Chloe Rodgers',
    subtitle: 'Level 2 Practitioner'
  }
];

export const profileRows: IProfileCard[][] = [
  profileRowOne,
  profileRowTwo,
  profileRowThree,
  profileRowFour,
];
