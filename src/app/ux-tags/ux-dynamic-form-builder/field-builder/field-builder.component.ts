import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'field-builder',
  template: `
  <div class="form-group row" [formGroup]="form">
    <label class="col-md-3 form-control-label" [attr.for]="field.label">
      {{field.label}}
      <strong class="text-danger" *ngIf="field.required">*</strong>
    </label>
    <div class="col-md-9" [ngSwitch]="field.type">
      <ux-textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></ux-textbox>
      <ux-textbox *ngSwitchCase="'email'" [field]="field" [form]="form"></ux-textbox>
      <ux-textbox *ngSwitchCase="'password'" [field]="field" [form]="form"></ux-textbox>
      <ux-textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></ux-textbox>
      <ux-textbox *ngSwitchCase="'tel'" [field]="field" [form]="form"></ux-textbox>

      <ux-dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></ux-dropdown>
      <ux-checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></ux-checkbox>
      <ux-radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></ux-radio>

      <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>
    </div>
  </div>
  `
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }

}
