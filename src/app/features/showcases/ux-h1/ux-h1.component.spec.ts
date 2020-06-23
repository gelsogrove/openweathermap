import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxH1Component } from './ux-h1.component';

describe('UxH1Component', () => {
  let component: UxH1Component;
  let fixture: ComponentFixture<UxH1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxH1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
