import { IContentImage } from '../../general/content/content-image/content-image';
import { ILightboxEntry } from '../../general/lightbox-wrapper/lightbox-entry';

export const facilitiesContentImage: IContentImage = {
  default: 'assets/banners/facilities/facilities_main.jpg',
  GT_LG: 'assets/banners/facilities/facilities_GT_LG.jpg',
  GT_MD: 'assets/banners/facilities/facilities_GT_MD.jpg',
  GT_SM: 'assets/banners/facilities/facilities_GT_SM.jpg',
  GT_XS: 'assets/banners/facilities/facilities_GT_XS.jpg',
  XS: 'assets/banners/facilities/facilities_XS.jpg',
  alt: 'Little Munchkins Facilities'
};

export const FacilitiesAlbum = (): ILightboxEntry[] => {
  const album: ILightboxEntry[] = [];

  for (let i = 1; i <= 13; i++) {
    const filename = `fac${i}.jpg`;
    album.push({
      src: `assets/facilities/img/${filename}`,
      thumb: `assets/facilities/thumb/${filename}`,
      caption: `Facility Image ${i}`,
    });
  }

  return album;
};

export const features: string[] = [
  'Fully enclosed and sectioned areas for different age categories',
  'Comfortable sleeping arrangements for nap times',
  'Lots of resources and books for all ages',
  'An on-site kitchen where home-cooked meals are made',
  'Child bathrooms with height-appropriate toilets and sinks',
  'Potty training facilities and equipment',
  'Large area for parking prams and buggies on the premises',
  'Alarmed doors and secured entrances',
];
