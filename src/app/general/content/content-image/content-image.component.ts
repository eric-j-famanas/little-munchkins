import { Component, Input, OnInit } from '@angular/core';
import { IContentImage } from './content-image';

@Component({
  selector: 'app-content-image',
  template: `
    <img
      src.gt-lg="{{contentImage.GT_LG}}"
      src.gt-md="{{contentImage.GT_MD}}"
      src.gt-sm="{{contentImage.GT_SM}}"
      src.gt-xs="{{contentImage.GT_XS}}"
    />
  `,
  styleUrls: ['./content-image.component.less']
})
export class ContentImageComponent implements OnInit {

  @Input() contentImage: IContentImage;

  ngOnInit() {
  }

}
