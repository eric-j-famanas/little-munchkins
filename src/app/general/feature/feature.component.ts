import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `
    <div class="feature-wrapper">
      <ng-content></ng-content>
      <button mat-flat-button routerLink="/{{routerLink}}"> Learn More</button>
    </div>
  `,
  styleUrls: ['./feature.component.less']
})
export class FeatureComponent implements OnInit {

  @Input() routerLink: string;

  constructor() { }

  ngOnInit() {
  }

}
