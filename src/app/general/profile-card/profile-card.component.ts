import { Component, Input } from '@angular/core';
import { IProfileCard } from './profile-card';

@Component({
  selector: 'app-profile-card',
  template: `
    <mat-card class="card-wrapper">
      <mat-card-content class="center-content">
        <img alt="{{profileCard.name}}" mat-card-avatar src="{{profileCard.src}}"/>
        <mat-card-title>{{profileCard.name}}</mat-card-title>
        <mat-card-subtitle>{{profileCard.subtitle}}</mat-card-subtitle>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent {
  @Input() profileCard: IProfileCard;
}
