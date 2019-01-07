import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { pageRoutes } from '../../app-routing.module';

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
        <a routerLink="/home">Owner-Account</a>
      </div>
      <div fxFlex fxLayout fxLayoutAlign="end" fxHide fxShow.gt-xs>
        <ul fxLayout fxLayoutGap="15px" class="navigation-items">
          <li *ngFor="let _page of _pageRoutes">
            <a routerLink="/{{_page.path}}">{{this.formatName(_page.path)}}</a>
          </li>
        </ul>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();

  public _pageRoutes: Array<Route> = pageRoutes;

  ngOnInit() {
  }

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  public formatName(pathName: string): string {
    let headerName = '';
    for (let i = 0; i < pathName.length; i++) {
      if (i === 0 || pathName[i - 1] === '-') {
        headerName += pathName[i].toLocaleUpperCase();
      } else {
        headerName += pathName[i];
      }
    }
    return headerName;
  }
}
