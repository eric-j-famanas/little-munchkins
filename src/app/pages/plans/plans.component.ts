import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content-template/content-template';

@Component({
  selector: 'app-plans',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Plan Picture
      </app-content-template>
      <div class="calculator-wrapper">
        <app-plan-calculator></app-plan-calculator>
      </div>
    </div>
  `,
  styleUrls: ['./plans.component.less']
})
export class PlansComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle = 'Our Plans and Pricing';

  public subHeaderTitle = 'Fantastic Care at Competitive Rates';

  ngOnInit() {
  }

}
