import { Component, OnInit } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { FacilitiesAlbum, facilitiesContentImage, features } from './facilities-data';

@Component({
  selector: 'app-facilities',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_facilitiesContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph [contentParagraph]="contentParagraph">
        <ul>
          <li *ngFor="let feature of _features">{{feature}}</li>
        </ul>
        <app-lightbox-wrapper [album]="_album"></app-lightbox-wrapper>
      </app-content-parapgraph>
    </div>
  `,
  styleUrls: ['./facilities.component.less']
})
export class FacilitiesComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle: string = 'Our House';
  public subHeaderTitle: string = 'A Fun and Educational Setting';

  public contentParagraph: string = 'Our facilities feature: ';

  public _features = features;

  public _album = FacilitiesAlbum();

  public _facilitiesContentImage: IContentImage = facilitiesContentImage;

  ngOnInit() {
  }

}
