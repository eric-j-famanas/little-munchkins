import { Component, OnInit } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { IPoliciesData, policiesContentImage, policiesData } from './policies-data';

@Component({
  selector: 'app-policies',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_policiesContentImage"></app-content-image>
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
  public _policiesContentImage: IContentImage = policiesContentImage;

  ngOnInit() {
  }

}
