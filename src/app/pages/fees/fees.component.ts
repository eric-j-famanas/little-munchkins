import { Component } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { clubName, clubRate, planFullRates, planHalfRates, planNames, plansContentImage } from './fees-data';

@Component({
  selector: 'app-plans',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_plansContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="contentParagraphOne">
      </app-content-parapgraph>
      <app-content-parapgraph>
        <table class="rates-table">
          <thead>
          <th>Age Category</th>
          <th>Half Day</th>
          <th>Full Day</th>
          </thead>
          <tbody>
          <tr *ngFor="let name of _planNames">
            <td>{{name}}</td>
            <td>£{{_planHalfRates[_planNames.indexOf(name)].toFixed(2)}}</td>
            <td>£{{_planFullRates[_planNames.indexOf(name)].toFixed(2)}}</td>
          </tr>
          </tbody>
        </table>
        <p>{{_clubName}} : {{_clubRate.toFixed(2)}} pH</p>
      </app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="contentParagraphTwo">
        <h6>** calculator is used for estimates only. Contact Little Munchkins to get a direct quote</h6>
      </app-content-parapgraph>
      <div class="calculator-wrapper">
        <app-plan-calculator></app-plan-calculator>
      </div>
      <app-footer [showMap]=false></app-footer>
    </div>
  `,
  styleUrls: ['./fees.component.less']
})
export class FeesComponent implements IContentTemplate {

  public headerTitle = 'Our Plans and Pricing';
  public subHeaderTitle = 'Fantastic Care at Competitive Rates';

  public contentParagraphOne = 'We offer nursery and preschool care for children ages 6 months to 5 years old' +
    'and before / after school club for children age up to 12 years. We drop off and collect children from local primary schools';

  public contentParagraphTwo = 'Want to learn more? Give us a call or use our calculator to get an estimate **';

  public _plansContentImage: IContentImage = plansContentImage;

  public _planNames: string[] = planNames;
  public _planHalfRates: number[] = planHalfRates;
  public _planFullRates: number[] = planFullRates;
  public _clubName: string = clubName;
  public _clubRate: number = clubRate;
}
