import { Component } from '@angular/core';
import { PathNames } from '../../../../routing/path-name-data';
import { servicesContentImage } from './services-feature-data';

@Component({
  selector: 'app-services-feature',
  template: `
    <app-feature
      [routerLink]="pathName"
      [contentImage]="_contentImage"
      [contentTitle]="_contentTitle"
      [contentSubtitle]="_contentSubtitle"
    >
    </app-feature>
  `,
  styleUrls: ['./services-feature.component.less']
})
export class ServicesFeatureComponent {
  public pathName: string = PathNames.about;
  public _contentImage = servicesContentImage;
  public _contentTitle = 'Fantastic Facilities';
  public _contentSubtitle = 'Your Child\'s Second Home';
}
