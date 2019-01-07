import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { pageRoutes } from './routing/app-routing.module';
import { PathData, pathNameDataSet } from './routing/path-name-data';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <mat-sidenav-container>
        <mat-sidenav #sidenav role="navigation">
          <app-sidenav-list
            [pathRoutes]="_pageRoutes"
            [pathData]="_pathData"
            (sidenavClose)="sidenav.close()"></app-sidenav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <app-header
            [pathRoutes]="_pageRoutes"
            [pathData]="_pathData"
            (sidenavToggle)="sidenav.toggle()">
          </app-header>
          <app-footer fxFlexOffset="auto"></app-footer>
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
  public _pageRoutes: Array<Route> = pageRoutes;
  public _pathData: Map<string, PathData> = pathNameDataSet;
}
