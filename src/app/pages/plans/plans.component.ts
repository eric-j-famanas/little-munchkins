import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  template: `
    <app-plan-calculator></app-plan-calculator>
  `,
  styleUrls: ['./plans.component.less']
})
export class PlansComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
