import { Component, OnInit } from '@angular/core';
import { ActivitiesAlbum, activitiesContentImage, firstParagrpah } from './activities-data';

@Component({
  selector: 'app-activities',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_activtiesContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="_firstParagraph"></app-content-parapgraph>
      <app-content-parapgraph>
        <app-lightbox-wrapper [album]="_album"></app-lightbox-wrapper>
      </app-content-parapgraph>
    </div>
  `,
  styleUrls: ['./activities.component.less']
})
export class ActivitiesComponent {
  public headerTitle = 'Our Daily Activities';
  public subHeaderTitle = 'What We Do and How We Play';
  public _activtiesContentImage = activitiesContentImage;

  public _firstParagraph = firstParagrpah;
  public _album = ActivitiesAlbum();
}
