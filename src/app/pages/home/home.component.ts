import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section fxLayout="column wrap">
      <mat-tab-group>
        <mat-tab label="Competitive Rates">
          <app-rates-feature></app-rates-feature>
        </mat-tab>
        <mat-tab label="Certified Services">
          <app-services-feature></app-services-feature>
        </mat-tab>
        <mat-tab label="Fun Activites">
          <app-activities-feature></app-activities-feature>
        </mat-tab>
      </mat-tab-group>
    </section>
  `,
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
}
