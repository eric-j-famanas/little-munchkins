import { Component, OnInit } from '@angular/core';
import { IContentImage } from '../../../../general/content/content-image/content-image';
import { PathNames } from '../../../../routing/path-name-data';
import { ratesContentImage } from './rates-feature-data';

@Component({
  selector: 'app-rates-feature',
  template: `
    <app-feature [contentImage]="_contentImage" [routerLink]="pathName"></app-feature>
  `,
  styleUrls: ['./rates-feature.component.less']
})
export class RatesFeatureComponent implements OnInit {

  constructor() {
  }

  public pathName: string = PathNames.plans;
  public _contentImage: IContentImage = ratesContentImage;

  ngOnInit() {
  }

}
