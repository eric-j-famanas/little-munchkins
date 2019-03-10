import { IContentImage } from '../../general/content/content-image/content-image';
import { IProfileCard } from '../../general/profile-card/profile-card';

export const aboutContentImage: IContentImage = {
  default: 'assets/banners/team/team_main.jpg',
  GT_LG: 'assets/banners/team/team_GT_LG.jpg',
  GT_MD: 'assets/banners/team/team_GT_MD.jpg',
  GT_SM: 'assets/banners/team/team_GT_SM.jpg',
  GT_XS: 'assets/banners/team/team_GT_XS.jpg',
  XS: 'assets/banners/team/team_XS.jpg',
  alt: 'Little Munchkins About'
};

const staffSrc = (staffName: string) => {
  return `assets/staff/${staffName}.jpg`;
};

export const profileRowOne: IProfileCard[] = [
  {
    src: staffSrc('anna_clark'),
    name: 'Anna Clark',
    subtitle: 'Nursery Director'
  }
];

export const profileRowTwo: IProfileCard[] = [
  {
    src: staffSrc('jodie_thrower'),
    name: 'Jodie Thrower',
    subtitle: 'Nursery Manager'
  },
  {
    src: staffSrc('sara_wilkinson'),
    name: 'Sara Wilkinson',
    subtitle: 'Deputy Manager'
  },
  {
    src: staffSrc('default'),
    name: 'Monika Pilarczyk',
    subtitle: 'Nursery Chef'
  }
];

export const profileRowThree: IProfileCard[] = [
  {
    src: staffSrc('april_lyness'),
    name: 'April Lyness',
    subtitle: 'Level 3 Practitioner'
  },
  {
    src: staffSrc('jessica_lyness'),
    name: 'Jessica Lyness',
    subtitle: 'Level 3 Practitioner'
  },
  {
    src: staffSrc('lisa_avery'),
    name: 'Lisa Avery',
    subtitle: 'Level 3 Practitioner'
  }
];

export const profileRowFour: IProfileCard[] = [
  {
    src: staffSrc('ashleigh_north'),
    name: 'Ashleigh North',
    subtitle: 'Level 3 Practitioner'
  },
  {
    src: staffSrc('default'),
    name: 'Shannon Rodgers',
    subtitle: 'Level 3 Apprentice'
  },
  {
    src: staffSrc('default'),
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
