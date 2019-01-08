import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section fxLayout="column wrap">
      <mat-tab-group (selectedTabChange)="executeSelectedChange($event)">
        <mat-tab label="Competitive Rates">
          <p>Competitive Rates</p>
        </mat-tab>
        <mat-tab label="Certified Services">
          <p>Certified Services</p>
        </mat-tab>
        <mat-tab label="Fun Activites">
          <p>Fun Activites</p>
        </mat-tab>
      </mat-tab-group>
    </section>
  `,
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
