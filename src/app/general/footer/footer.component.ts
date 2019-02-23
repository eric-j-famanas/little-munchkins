import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <app-footer-content></app-footer-content>
    </footer>
  `,
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
}
