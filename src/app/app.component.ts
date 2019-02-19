import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { IContentImage } from './general/content/content-image/content-image';
import { logoImage, pageRoutes, PathData, pathNameDataSet } from './routing/path-name-data';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <mat-sidenav-container>
        <mat-sidenav #sidenav role="navigation" class="all-wrap">
          <app-sidenav-list
            [pathRoutes]="_pageRoutes"
            [pathData]="_pathData"
            (sidenavClose)="sidenav.close()"></app-sidenav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <div class="page-wrap">
            <app-header
              [logoImage]="_logoImage"
              [pathRoutes]="_pageRoutes"
              [pathData]="_pathData"
              (sidenavToggle)="sidenav.toggle()">
            </app-header>
            <main class="content">
              <router-outlet></router-outlet>
            </main>
            <app-footer></app-footer>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </app-layout>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public _pageRoutes: Array<Route> = pageRoutes;
  public _pathData: Map<string, PathData> = pathNameDataSet;
  public _logoImage: IContentImage = logoImage;
}
