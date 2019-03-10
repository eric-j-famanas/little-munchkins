import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-content',
  template: `
    <div class="content">
      <div>Phone: ‭+44 7702 273757‬</div>
      <div>Address: St Barnabas, Medway Road, Huntingdon PE29 1SF</div>
      <ng-content></ng-content>
      <div>Email:
        <a href="mailto:manager@little-munchkins.co.uk">manager@little-munchkins.co.uk</a>
      </div>
    </div>
  `,
  styleUrls: ['./footer-content.component.less']
})
export class FooterContentComponent {}
