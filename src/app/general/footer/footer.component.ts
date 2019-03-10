import { Component, Input } from '@angular/core';

// tslint:disable:max-line-length
@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <app-footer-content>
        <div *ngIf="showMap" class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.4561861320744!2d-0.175881683735531!3d52.344010979781274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877dd416b662f53%3A0x80baff0736f79505!2sLittle+Munchkins+Nursery+and+Preschool!5e0!3m2!1sen!2suk!4v1549750143157"
            frameborder="0"
            style="border:0" allowfullscreen>
          </iframe>
        </div>
      </app-footer-content>
    </footer>
  `,
  styleUrls: ['./footer.component.less']
})
// tslint:enable:max-line-length
export class FooterComponent {
  @Input() showMap: boolean = false;
}
