import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
    selector: 'ux-textbox',
    template: `
      <div [formGroup]="form">
        <input *ngIf="!field.multiline"
               [attr.type]="field.type" class="form-control"
               [id]="field.name"
               [name]="field.name"
               [required] ="field.required"
               [placeholder]="field.placeholder !== undefined ? field.placeholder : ''"
               [formControlName]="field.name">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
        rows="9" class="form-control" [placeholder]="field.placeholder !== undefined ? field.placeholder : ''" rows="5"></textarea>
      </div>
    `
})
export class TextBoxComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }

}
