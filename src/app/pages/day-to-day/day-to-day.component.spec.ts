import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayToDayComponent } from './day-to-day.component';

describe('DayToDayComponent', () => {
  let component: DayToDayComponent;
  let fixture: ComponentFixture<DayToDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayToDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayToDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
