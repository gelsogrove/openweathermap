import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxDynamicFormBuilderComponent } from './ux-dynamic-form-builder.component';

describe('UxDynamicformbuilderComponent', () => {
  let component: UxDynamicFormBuilderComponent;
  let fixture: ComponentFixture<UxDynamicFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxDynamicFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxDynamicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
