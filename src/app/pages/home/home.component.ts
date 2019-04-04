import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="content-wrapper" style="position: relative">
      <app-rates-feature></app-rates-feature>
    </div>
    <app-footer [showMap]=true></app-footer>
  `,
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
}
