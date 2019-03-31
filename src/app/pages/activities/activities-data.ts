import { IContentImage } from '../../general/content/content-image/content-image';
import { ILightboxEntry } from '../../general/lightbox-wrapper/lightbox-entry';

export const ActivitiesAlbum = (): ILightboxEntry[] => {
  const album: ILightboxEntry[] = [];

  for (let i = 1; i <= 7; i++) {
    const filename = `can${i}.jpg`;
    album.push({
      src: `assets/activities/img/${filename}`,
      thumb: `assets/activities/thumb/${filename}`,
      caption: `Activities Image ${i}`,
    });
  }

  return album;
};

export const activitiesContentImage: IContentImage = {
  default: 'assets/banners/activities/activities_main.jpg',
  GT_LG: 'assets/banners/activities/activities_GT_LG.jpg',
  GT_MD: 'assets/banners/activities/activities_GT_MD.jpg',
  GT_SM: 'assets/banners/activities/activities_GT_SM.jpg',
  GT_XS: 'assets/banners/activities/activities_GT_XS.jpg',
  XS: 'assets/banners/activities/activities_XS.jpg',
  alt: 'Little Munchkins Activities'
};

export const firstParagrpah = 'We are sure to keep our Little Munchkins ' +
  'both healthy and having fun. Your children will participate' +
  'in fun activities such as flippy flops and yoga, sports activities, and educational activities to promote mental growth';

export const features: string[] = [
  'Daily physical activities such as Flippy Flops and Yoga',
  'Oak Activities',
  'Preschool sports activities',
  'Educational activities to promote mental growth',
];
