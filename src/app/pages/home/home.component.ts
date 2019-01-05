import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section fxLayout="column wrap">
      <div fxFlexAlign="center">
        <p>Welcome to the Material Angular OwnerAccount Application</p>
      </div>

      <p>In this applicatoin we are going to work with:</p>
      <mat-tab-group (selectedTabChange)="executeSelectedChange($event)">
        <mat-tab label="Material Components">
          <p>We are going to use different material components to create nice looking angular app.</p>
        </mat-tab>
        <mat-tab label="Consume .NET Core Web API">
          <p>We will consume our .NET Core applicatoin. Basicaly, we will create complete CRUD client app.</p>
        </mat-tab>
        <mat-tab label="Fully responsive navigation menu">
          <p>By using material components, we are going to create fully responsive navigation menu, with its side-bar as well.</p>
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