import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
          <li>
            <a routerLink="/owner">Owner Actions</a>
          </li>
          <li>
            <a routerLink="/account">Account Actions</a>
          </li>
        </ul>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output()
  public sidenavToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
