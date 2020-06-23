import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxH1Component } from './ux-h1/ux-h1.component';
import { UxDynamicFormBuilderModule} from './ux-dynamic-form-builder/ux-dynamic-form-builder.module';
import {UxDynamicFormBuilderComponent} from './ux-dynamic-form-builder/ux-dynamic-form-builder.component';

@NgModule({
  declarations: [UxH1Component],
  imports: [
    CommonModule,
    UxDynamicFormBuilderModule
  ],
  exports: [
    UxH1Component,
    UxDynamicFormBuilderComponent
  ]
})
export class SdkTagsModule { }
