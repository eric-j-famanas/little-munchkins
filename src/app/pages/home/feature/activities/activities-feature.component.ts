import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-feature',
  template: `
    <app-feature>
      <div style="color: black">Activites Feature Works</div>
    </app-feature>
  `,
  styleUrls: ['./activities-feature.component.less']
})
export class ActivitiesFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
