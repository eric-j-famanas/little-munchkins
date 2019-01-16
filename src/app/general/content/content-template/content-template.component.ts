import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-template',
  template: `
    <div class="header-image-wrapper">
      <ng-content></ng-content>
    </div>
    <div class="header-title-wrapper">
      <div class="header-title">{{headerTitle}}</div>
      <div class="sub-header-title">{{subHeaderTitle}}</div>
    </div>

  `,
  styleUrls: ['./content-template.component.less']
})
export class ContentTemplateComponent implements OnInit {

  constructor() {
  }

  @Input() headerTitle: string;

  @Input() subHeaderTitle: string;

  ngOnInit() {
  }

}
