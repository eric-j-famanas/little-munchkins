import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  template: `
    <mat-card class="card-wrapper">
      <mat-card-content class="center-content">
        <img mat-card-avatar src="{{profileSrc}}"/>
        <mat-card-title>{{position}}</mat-card-title>
        <mat-card-subtitle>{{subtitle}}</mat-card-subtitle>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {

  @Input() profileSrc: string;

  @Input() position: string;

  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
