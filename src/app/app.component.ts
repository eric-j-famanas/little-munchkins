import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <app-home></app-home>
    </app-layout>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'little-munchkins';
}
