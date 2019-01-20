import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template/content-template';

@Component({
  selector: 'app-facilities',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Facilties Picture
      </app-content-template>
    </div>
  `,
  styleUrls: ['./facilities.component.less']
})
export class FacilitiesComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our House';
  public subHeaderTitle: string = 'A Fun and Educational Setting';

  ngOnInit() {
  }

}
