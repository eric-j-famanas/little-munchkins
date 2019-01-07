import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mat-toolbar">
      I am the footer
    </footer>
  `,
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
