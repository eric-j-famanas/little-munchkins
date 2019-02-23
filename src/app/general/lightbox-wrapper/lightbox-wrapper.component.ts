import { Component, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ILightboxEntry } from './lightbox-entry';

@Component({
  selector: 'app-lightbox-wrapper',
  template: `
    <div class="album">
      <div *ngFor="let image of album; let i=index">
        <mat-card>
          <img alt="{{getAlt(image)}}" [src]="image.thumb" (click)="open(i)"/>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./lightbox-wrapper.component.less']
})
export class LightboxWrapperComponent {

  constructor(
    private readonly lightbox: Lightbox,
  ) {
  }

  @Input() public album: ILightboxEntry[];

  public open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  public close(): void {
    this.lightbox.close();
  }

  public getAlt(image: ILightboxEntry): string {
    return `Little Munchkins ${image.caption}`;
  }
}
