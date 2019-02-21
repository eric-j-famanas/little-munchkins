import { Component, OnInit } from '@angular/core';
import { PathNames } from '../../../../routing/path-name-data';
import { servicesContentImage } from './services-feature-data';

@Component({
  selector: 'app-services-feature',
  template: `
    <app-feature [routerLink]="pathName" [contentImage]="_contentImage">
    </app-feature>
  `,
  styleUrls: ['./services-feature.component.less']
})
export class ServicesFeatureComponent implements OnInit {

  constructor() {
  }

  public pathName: string = PathNames.facilities;
  public _contentImage = servicesContentImage;

  ngOnInit() {
  }
}
