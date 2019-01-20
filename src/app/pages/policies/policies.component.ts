import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { IPoliciesData, policiesData } from './policies-data';

@Component({
  selector: 'app-policies',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Policies Picture
      </app-content-template>
      <app-pdf-wrapper *ngFor="let policy of _policiesData"
                       [pdfTitle]="policy.pdfTitle"
                       [pdfLink]="policy.pdfLink">
      </app-pdf-wrapper>
    </div>
  `,
  styleUrls: ['./policies.component.less']
})
export class PoliciesComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our Policies and Procedures';
  public subHeaderTitle: string = 'Every House Has Its Rules';

  public _policiesData: IPoliciesData[] = policiesData;

  ngOnInit() {
  }

}
