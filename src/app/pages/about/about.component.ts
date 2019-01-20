import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template/content-template';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Policies Picture
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="firstParagraph"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="secondParagraph"></app-content-parapgraph>
      <app-profile-card
        [profileSrc]="'assets/staff/test.jpg'"
        [position]="'test position'"
        [subtitle]="'testSubtitle'">
      </app-profile-card>
    </div>
  `,
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our Business, Our People';
  public subHeaderTitle: string = 'We Treat Your Little Munchkins as Our Own';

  public firstParagraph = 'We take great pride in our setting, providing safe and secure facilities and homely atmosphere.';
  public secondParagraph = 'Our staff is here to ensure that all children’s lives are enriched as best as possible,' +
    'believing that every child should have the greatest start they can to help them in life.';

  ngOnInit() {
  }

}
