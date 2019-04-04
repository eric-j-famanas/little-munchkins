import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="content-wrapper" style="position: relative">
      <app-rates-feature></app-rates-feature>
      <app-footer [showMap]=true></app-footer>
    </div>
  `,
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
}
