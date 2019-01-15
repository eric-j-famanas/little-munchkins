import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content-template/content-template';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Policies Picture
      </app-content-template>
    </div>
  `,
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our Business, Our People';
  public subHeaderTitle: string = 'We Treat Your Little Munchkins as Our Own';

  ngOnInit() {
  }

}
