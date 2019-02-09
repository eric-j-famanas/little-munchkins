import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxWrapperComponent } from './lightbox-wrapper.component';

describe('LightboxWrapperComponent', () => {
  let component: LightboxWrapperComponent;
  let fixture: ComponentFixture<LightboxWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
