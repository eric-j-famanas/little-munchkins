import { Component } from '@angular/core';
import { IContentImage } from '../../../../general/content/content-image/content-image';
import { PathNames } from '../../../../routing/path-name-data';
import { ratesContentImage } from './rates-feature-data';

@Component({
  selector: 'app-rates-feature',
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
    </div>
    <button mat-flat-button routerLink="/{{pathName}}"> Learn More</button>
  `,
  styleUrls: ['./rates-feature.component.less']
})
export class RatesFeatureComponent {
  public pathName: string = PathNames.fees;
  public contentImage: IContentImage = ratesContentImage;
  public contentTitle = 'We Provide Great Care';
}
