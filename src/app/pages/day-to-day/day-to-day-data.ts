import { IContentImage } from '../../general/content/content-image/content-image';
import { ILightboxEntry } from '../../general/lightbox-wrapper/lightbox-entry';

export const DayToDayAlbum = (): ILightboxEntry[] => {
  const album: ILightboxEntry[] = [];

  for (let i = 1; i <= 7; i++) {
    const filename = `can${i}.jpg`;
    album.push({
      src: `assets/day-to-day/img/${filename}`,
      thumb: `assets/day-to-day/thumb/${filename}`,
      caption: `Day To Day Image ${i}`,
    });
  }

  return album;
};

export const dayToDayContentImage: IContentImage = {
  default: 'assets/banners/dayToDay/dayToDay_main.jpg',
  GT_LG: 'assets/banners/dayToDay/dayToDay_GT_LG.jpg',
  GT_MD: 'assets/banners/dayToDay/dayToDay_GT_MD.jpg',
  GT_SM: 'assets/banners/dayToDay/dayToDay_GT_SM.jpg',
  GT_XS: 'assets/banners/dayToDay/dayToDay_GT_XS.jpg',
  XS: 'assets/banners/dayToDay/dayToDay_XS.jpg',
  alt: 'Little Munchkins dayToDay'
};

export const firstParagraph = 'At Little Munchkins we offer home cooked meals and nutritious snacks. ' +
  'We understand that eating healthy is an important concern for every parent, and ' +
  'we do our best to make sure those good habits continue in our setting.';

export const secondParagraph = 'Little Munchkins offer breakfast, lunch and afternoon dinner; light snacks, ' +
  'including fresh fruit and vegetables, as well as drinks, are available throughout the day. ' +
  'The nursery cook freshly prepares all meals on site. Food might be liquidised/ blended for ' +
  'younger children or alternatively parents can provide pre-prepared food. We also provide ' +
  'purred fruit and vegetables for weaning babies.';


export const features: string[] = [
  'Daily physical activities such as Flippy Flops and Yoga',
  'Oak Activities',
  'Preschool sports activities',
  'Educational activities to promote mental growth',
];
