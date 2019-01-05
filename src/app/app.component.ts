import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <mat-sidenav-container>
        <mat-sidenav #sidenav role="navigation">
          <!--this is a place for us to add side-nav code-->
        </mat-sidenav>
        <mat-sidenav-content>
          <app-header (sidenavToggle)="sidenav.toggle()"></app-header>
          <main>
            <router-outlet></router-outlet>
          </main>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </app-layout>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'little-munchkins';
}
