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
