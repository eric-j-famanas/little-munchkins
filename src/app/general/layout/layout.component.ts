import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center center" class="layout-wrapper">
      <div fxFlex="80%" fxFlex.lt-md="100%" class="flex-wrapper">
        <ng-content></ng-content>
      </div>
    </div>

  `,
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}