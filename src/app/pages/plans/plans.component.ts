import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template';

@Component({
  selector: 'app-plans',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Plan Picture
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="contentParagraph"></app-content-parapgraph>
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

  public contentParagraph = 'We offer nursery and preschool care for children ages 6 months to 5 years old' +
    'and before/ after school club for children age up to 12 years. We drop off and collect children from local primary schools' +
    '(St. John’s Primary and Huntingdon Primary School).';

  ngOnInit() {
  }

}
