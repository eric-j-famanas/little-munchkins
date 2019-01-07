import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route } from '@angular/router';
import { PathData } from '../../routing/path-name-data';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-nav-list>
      <span *ngFor="let route of pathRoutes">
        <a mat-list-item routerLink="/{{route.path}}" (click)="onSidenavClose()">
        <mat-icon>{{pathData.get(route.path).icon}}</mat-icon>
        <span class="nav-caption">{{pathData.get(route.path).viewName}}</span>
      </a>
      </span>
    </mat-nav-list>
  `,
  styleUrls: ['./sidenav-list.component.less']
})
export class SidenavListComponent implements OnInit {

  constructor() {
  }

  @Output() sidenavClose: EventEmitter<void> = new EventEmitter<void>();

  @Input() pathRoutes: Array<Route>;

  @Input() pathData: Map<string, PathData>;

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
