import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `
    <div class="feature-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./feature.component.less']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
