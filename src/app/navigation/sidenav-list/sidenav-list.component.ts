import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/home" (click)="onSidenavClose()">
        <mat-icon>home</mat-icon>
        <span class="nav-caption">Home</span>
      </a>
      <a mat-list-item routerLink="/owner" (click)="onSidenavClose()">
        <mat-icon>assignment_ind</mat-icon>
        <span class="nav-caption">Owner Actions</span>
      </a>
      <a mat-list-item routerLink="#" (click)="onSidenavClose()">
        <mat-icon>account_balance</mat-icon>
        <span class="nav-caption">Account Actions</span>
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./sidenav-list.component.less']
})
export class SidenavListComponent implements OnInit {

  constructor() {
  }

  @Output() sidenavClose: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
