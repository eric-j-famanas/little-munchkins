import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route } from '@angular/router';
import { PathData } from '../../routing/path-name-data';
import { formatName } from '../../utilities/string-formatters';

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
          <li *ngFor="let route of pathRoutes">
            <a routerLink="/{{route.path}}">{{pathData.get(route.path).viewName}}</a>
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

  @Input() pathRoutes: Array<Route>;

  @Input() pathData: Map<string, PathData>;

  ngOnInit() {
  }

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  public formatName(pathName: string): string {
    return formatName(pathName);
  }
}
