import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  template: `
    <mat-card>
      <img mat-card-avatar src="{{profileSrc}}"/>
      <mat-card-title>{{position}}</mat-card-title>
      <mat-card-subtitle>{{subtitle}}</mat-card-subtitle>
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
