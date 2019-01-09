import { Component, OnInit } from '@angular/core';
import { PathNames } from '../../../../routing/path-name-data';

@Component({
  selector: 'app-activities-feature',
  template: `
    <app-feature [routerLink]="pathName">
      <div style="color: black">Activites Feature Works</div>
    </app-feature>
  `,
  styleUrls: ['./activities-feature.component.less']
})
export class ActivitiesFeatureComponent implements OnInit {

  constructor() {
  }

  public pathName = PathNames.dayToDay;

  ngOnInit() {
  }

}
