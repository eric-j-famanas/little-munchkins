import { Component } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { firstParagraph, mealsContentImage, secondParagraph } from './meals-data';

@Component({
  selector: 'app-day-to-day',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_dayToDayContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="'What We Eat:'"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="_firstParagraph"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="_secondParagraph"></app-content-parapgraph>
    </div>
  `,
  styleUrls: ['./meals.component.less']
})
export class MealsComponent implements IContentTemplate {

  public headerTitle = 'Our Daily Routine';
  public subHeaderTitle = 'What We Do, What We Eat, and How We Grow';

  public _dayToDayContentImage: IContentImage = mealsContentImage;
  public _firstParagraph = firstParagraph;
  public _secondParagraph = secondParagraph;
}
