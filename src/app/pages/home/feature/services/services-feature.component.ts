import { Component, OnInit } from '@angular/core';
import { PathNames } from '../../../../routing/path-name-data';

@Component({
  selector: 'app-services-feature',
  template: `
    <app-feature [routerLink]="pathName">
      <div style="color: black">Services Feature Works</div>
    </app-feature>
  `,
  styleUrls: ['./services-feature.component.less']
})
export class ServicesFeatureComponent implements OnInit {

  constructor() {
  }

  public pathName: string = PathNames.facilities;

  ngOnInit() {
  }
}
