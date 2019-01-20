import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template/content-template';

@Component({
  selector: 'app-policies',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Policies Picture
      </app-content-template>
    </div>
  `,
  styleUrls: ['./policies.component.less']
})
export class PoliciesComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our Policies and Procedures';
  public subHeaderTitle: string = 'Every House Has Its Rules';

  ngOnInit() {
  }

}
