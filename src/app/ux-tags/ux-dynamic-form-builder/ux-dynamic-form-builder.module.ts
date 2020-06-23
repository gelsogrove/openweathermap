import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { UxDynamicFormBuilderComponent } from './ux-dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';
import { DropDownComponent } from './atoms/dropdown';
import { CheckBoxComponent } from './atoms/checkbox';
import { RadioComponent } from './atoms/radio';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UxDynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    RadioComponent
  ],
  exports: [UxDynamicFormBuilderComponent],
  providers: []
})
export class UxDynamicFormBuilderModule { }
