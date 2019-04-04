import { Component } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { FacilitiesAlbum, facilitiesContentImage, features } from './about-data';

@Component({
  selector: 'app-facilities',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_facilitiesContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="contentParagraphOne"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="contentParagraphTwo"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="contentParagraphThree"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="contentParagraph">
        <ul>
          <li *ngFor="let feature of _features">{{feature}}</li>
        </ul>
        <app-lightbox-wrapper [album]="_album"></app-lightbox-wrapper>
      </app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="contentParagraphFour"></app-content-parapgraph>
      <app-footer [showMap]=false></app-footer>
    </div>
  `,
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements IContentTemplate {

  public headerTitle: string = 'Our Setting';
  public subHeaderTitle: string = 'A Fun and Educational Setting';

  public contentParagraphOne: string = 'We take great pride in our setting, providing safe and secure facilities for children to learn, ' +
    'grow and explore. We provide highest standards of care by adapting to your child’s individual interests and needs.';

  public contentParagraphTwo: string = 'We work hard to make sure our children have the right skills for school. Each child is unique ' +
    'and we individually nurture each and every one to make sure they are the best they can possibly be.';

  public contentParagraphThree: string = 'We understand that choosing the right care for your child requires careful consideration. ' +
    'That’s why we offer all prospective customers the opportunity to book show around to see for yourselves and find out just how ' +
    'well we will look after your child.';

  public contentParagraphFour: string = 'There is a car park at the rear of the building. The Nursery is open 7:30am until 6:00 pm ' +
    'throughout the year, closing for all Bank Holiday and one week at Christmas.';

  public contentParagraph: string = 'Our about feature: ';

  public _features = features;

  public _album = FacilitiesAlbum();

  public _facilitiesContentImage: IContentImage = facilitiesContentImage;
}
