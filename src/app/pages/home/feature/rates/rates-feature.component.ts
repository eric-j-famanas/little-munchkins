import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates-feature',
  template: `
    <app-feature>
      <div style="color: black">Rates Feature Works</div>
    </app-feature>
  `,
  styleUrls: ['./rates-feature.component.less']
})
export class RatesFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
