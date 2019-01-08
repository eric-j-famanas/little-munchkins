import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesFeatureComponent } from './activities-feature.component';

describe('ActivitiesFeatureComponent', () => {
  let component: ActivitiesFeatureComponent;
  let fixture: ComponentFixture<ActivitiesFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
