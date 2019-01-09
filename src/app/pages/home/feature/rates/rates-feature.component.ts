import { Component, OnInit } from '@angular/core';
import { PathNames } from '../../../../routing/path-name-data';

@Component({
  selector: 'app-rates-feature',
  template: `
    <app-feature [routerLink]="pathName">
      <div style="color: black">Rates Feature Works</div>
    </app-feature>
  `,
  styleUrls: ['./rates-feature.component.less']
})
export class RatesFeatureComponent implements OnInit {

  constructor() {
  }

  public pathName: string = PathNames.plans;

  ngOnInit() {
  }

}
