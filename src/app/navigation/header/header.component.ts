import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '@angular/router';
import { IContentImage } from '../../general/content/content-image/content-image';
import { PathData } from '../../routing/path-name-data';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <div fxHide.gt-xs>
        <button mat-icon-button (click)="onToggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <div>
        <a routerLink="/home">
          <img class="logo"
               alt="{{logoImage.alt}}"
               src="{{logoImage.default}}"
               src.gt-lg="{{logoImage.GT_LG}}"
               src.gt-md="{{logoImage.GT_MD}}"
               src.gt-sm="{{logoImage.GT_SM}}"
               src.gt-xs="{{logoImage.GT_XS}}"
               src.xs="{{logoImage.XS}}"
          />
        </a>
      </div>
      <div fxFlex fxLayout fxLayoutAlign="end" fxHide fxShow.gt-xs>
        <ul fxLayout fxLayoutGap="15px" class="navigation-items">
          <li *ngFor="let route of pathRoutes">
            <a routerLink="/{{route.path}}">{{getViewName(route.path)}}</a>
          </li>
        </ul>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();

  @Input() pathRoutes: Array<Route>;
  @Input() pathData: Map<string, PathData>;
  @Input() logoImage: IContentImage;

  public getViewName(path: string): string {
    const route = this.pathData.get(path);
    if (route !== undefined) {
      return route.viewName;
    } else {
      return '';
    }
  }

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
