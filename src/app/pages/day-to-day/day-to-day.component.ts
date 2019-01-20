import { Component, OnInit } from '@angular/core';
import { IContentTemplate } from '../../general/content/content-template/content-template';

@Component({
  selector: 'app-day-to-day',
  template: `
    <div class="content-wrapper">
      <app-content-template [headerTitle]="headerTitle" [subHeaderTitle]="subHeaderTitle">
        Day To Day Picture
      </app-content-template>
    </div>
  `,
  styleUrls: ['./day-to-day.component.less']
})
export class DayToDayComponent implements IContentTemplate, OnInit {

  constructor() {
  }

  public headerTitle = 'Our Daily Routine';
  public subHeaderTitle = 'What We Do, What We Eat, and How We Grow';

  ngOnInit() {
  }

}
