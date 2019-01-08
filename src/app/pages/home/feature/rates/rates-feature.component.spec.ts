import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesFeatureComponent } from './rates-feature.component';

describe('RatesFeatureComponent', () => {
  let component: RatesFeatureComponent;
  let fixture: ComponentFixture<RatesFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
