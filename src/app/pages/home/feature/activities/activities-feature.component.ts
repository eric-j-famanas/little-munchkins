import { Component } from '@angular/core';
import { IContentImage } from '../../../../general/content/content-image/content-image';
import { PathNames } from '../../../../routing/path-name-data';
import { activitiesContentImage } from './activities-feature-data';

@Component({
  selector: 'app-activities-feature',
  template: `
    <app-feature
      [routerLink]="pathName"
      [contentImage]="_contentImage"
      [contentTitle]="_contentTitle"
      [contentSubtitle]="_contentSubtitle"
    >
    </app-feature>
  `,
  styleUrls: ['./activities-feature.component.less']
})
export class ActivitiesFeatureComponent {
  public pathName = PathNames.dayToDay;
  public _contentImage: IContentImage = activitiesContentImage;
  public _contentTitle = 'Great Acivities';
  public _contentSubtitle = 'Both Fun and Educational';
}
