import { Component, OnInit } from '@angular/core';
import { IContentImage } from '../../general/content/content-image/content-image';
import { IContentTemplate } from '../../general/content/content-template/content-template';
import { ILightboxEntry } from '../../general/lightbox-wrapper/lightbox-entry';
import { DayToDayAlbum, dayToDayContentImage } from './day-to-day-data';

@Component({
  selector: 'app-day-to-day',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        <app-content-image [contentImage]="_dayToDayContentImage"></app-content-image>
      </app-content-template>
      <app-content-parapgraph>
        <app-lightbox-wrapper [album]="_album"></app-lightbox-wrapper>
      </app-content-parapgraph>
    </div>
  `,
  styleUrls: ['./day-to-day.component.less']
})
export class DayToDayComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle = 'Our Daily Routine';

  public subHeaderTitle = 'What We Do, What We Eat, and How We Grow';

  public _dayToDayContentImage: IContentImage = dayToDayContentImage;

  public _album: ILightboxEntry[] = DayToDayAlbum();

  ngOnInit() {
  }

}
