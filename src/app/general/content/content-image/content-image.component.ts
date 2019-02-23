import { Component, Input } from '@angular/core';
import { IContentImage } from './content-image';

@Component({
  selector: 'app-content-image',
  template: `
    <div class="image-wrapper">
      <img
        alt="{{contentImage.alt}}"
        src="{{contentImage.default}}"
        src.gt-lg="{{contentImage.GT_LG}}"
        src.gt-md="{{contentImage.GT_MD}}"
        src.gt-sm="{{contentImage.GT_SM}}"
        src.gt-xs="{{contentImage.GT_XS}}"
        src.xs="{{contentImage.XS}}"
      />
    </div>

  `,
  styleUrls: ['./content-image.component.less']
})
export class ContentImageComponent {
  @Input() contentImage: IContentImage;
}
