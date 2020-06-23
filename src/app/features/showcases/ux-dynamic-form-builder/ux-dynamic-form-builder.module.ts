import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UxDynamicFormBuilderRoutingModule} from './ux-dynamic-form-builder.routing.module';
import {UxDynamicFormBuilderComponent} from './ux-dynamic-form-builder.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [UxDynamicFormBuilderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UxDynamicFormBuilderRoutingModule,
  ]
})
export class UxDynamicFormBuilderModule { }
