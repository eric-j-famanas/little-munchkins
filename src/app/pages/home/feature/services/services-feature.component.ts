import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-feature',
  template: `
    <app-feature>
      <div style="color: black">Services Feature Works</div>
    </app-feature>
  `,
  styleUrls: ['./services-feature.component.less']
})
export class ServicesFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
