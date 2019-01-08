import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFeatureComponent } from './services-feature.component';

describe('ServicesFeatureComponent', () => {
  let component: ServicesFeatureComponent;
  let fixture: ComponentFixture<ServicesFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
