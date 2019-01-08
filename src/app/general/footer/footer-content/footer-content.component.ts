import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-content',
  template: `
    <div class="content">
      <a href="mailto:manager@little-munchkins.co.uk">Email Us!</a>
      <div>Phone: Phone Number</div>
      <div>Address: Address</div>
    </div>
  `,
  styleUrls: ['./footer-content.component.less']
})
export class FooterContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
