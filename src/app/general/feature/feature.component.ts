import { Component, Input, OnInit } from '@angular/core';
import { IContentImage } from '../content/content-image/content-image';

@Component({
  selector: 'app-feature',
  template: `
    <div class="feature-wrapper">
      <div class="image-wrapper">
        <img *ngIf="contentImage !== undefined"
             alt="{{contentImage.alt}}"
             src="{{contentImage.default}}"
             src.gt-lg="{{contentImage.GT_LG}}"
             src.gt-md="{{contentImage.GT_MD}}"
             src.gt-sm="{{contentImage.GT_SM}}"
             src.gt-xs="{{contentImage.GT_XS}}"
             src.xs="{{contentImage.XS}}"
        />
      </div>
    </div>
    <div class="titleWrapper">
      <h1>{{contentTitle}}</h1>
      <h2>{{contentSubtitle}}</h2>
    </div>
    <button mat-flat-button routerLink="/{{routerLink}}"> Learn More</button>
  `,
  styleUrls: ['./feature.component.less']
})
export class FeatureComponent implements OnInit {

  constructor() {
  }

  @Input() routerLink: string;
  @Input() contentTitle: string;
  @Input() contentSubtitle: string;
  @Input() contentImage: IContentImage;

  ngOnInit() {
  }

}
