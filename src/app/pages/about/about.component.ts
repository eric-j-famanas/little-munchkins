import { Component, OnInit } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { IProfileCard } from '../../general/profile-card/profile-card';
import { aboutContentImage, profileRows } from './about-data';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_aboutContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="firstParagraph"></app-content-parapgraph>
      <app-content-parapgraph [contentParagraph]="secondParagraph"></app-content-parapgraph>
      <app-content-parapgraph>
        <div *ngFor="let row of _profileRows">
          <div class="row">
            <app-profile-card *ngFor="let profileCard of row" [profileCard]="profileCard"></app-profile-card>
          </div>
        </div>
      </app-content-parapgraph>
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

  public _aboutContentImage: IContentImage = aboutContentImage;
  public _profileRows: IProfileCard[][] = profileRows;

  ngOnInit() {
  }

}
