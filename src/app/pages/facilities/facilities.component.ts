import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template/content-template';

@Component({
  selector: 'app-facilities',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Facilties Picture
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="contentParagraph">
        <ul>
          <li *ngFor="let feature of features">{{feature}}</li>
        </ul>
      </app-content-parapgraph>

    </div>
  `,
  styleUrls: ['./facilities.component.less']
})
export class FacilitiesComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our House';
  public subHeaderTitle: string = 'A Fun and Educational Setting';

  public contentParagraph: string = 'Our facilities feature: ';

  public features: string[] = [
    'Fully enclosed and sectioned areas for different age categories',
    'Comfortable sleeping arrangements for nap times',
    'Lots of resources and books for all ages',
    'An on-site kitchen where home-cooked meals are made',
    'Child bathrooms with height-appropriate toilets and sinks',
    'Potty training facilities and equipment',
    'Large area for parking prams and buggies on the premises',
    'Alarmed doors and secured entrances',
  ];

  ngOnInit() {
  }

}
