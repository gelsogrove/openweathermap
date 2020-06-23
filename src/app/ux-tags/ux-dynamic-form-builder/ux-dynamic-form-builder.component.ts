import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ux-dynamic-form-builder',
  template: `
    <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9 text-right">
          <button type="reset"  class="btn btn-primary mr-3">Reset</button>
          <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  `,
})
export class UxDynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    const fieldsCtrls = {};
    for (const f of this.fields) {
      if (f.type !== 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
      } else {
        const opts = {};
        for (const opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts);
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
}
