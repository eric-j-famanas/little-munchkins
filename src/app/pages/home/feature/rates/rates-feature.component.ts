import { Component } from '@angular/core';
import { IContentImage } from '../../../../general/content/content-image/content-image';
import { PathNames } from '../../../../routing/path-name-data';
import { ratesContentImage } from './rates-feature-data';

@Component({
  selector: 'app-rates-feature',
  template: `
    <app-feature
      [contentImage]="_contentImage"
      [routerLink]="pathName"
      [contentTitle]="_contentTitle"
      [contentSubtitle]="_contentSubtitle"
    ></app-feature>
  `,
  styleUrls: ['./rates-feature.component.less']
})
export class RatesFeatureComponent {
  public pathName: string = PathNames.plans;
  public _contentImage: IContentImage = ratesContentImage;
  public _contentTitle = 'Great Care';
  public _contentSubtitle = 'For Even Greater Prices';
}
