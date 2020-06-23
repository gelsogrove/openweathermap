
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UxDynamicFormBuilderComponent} from './ux-dynamic-form-builder.component';

const routes: Routes = [
  { path: '', component: UxDynamicFormBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UxDynamicFormBuilderRoutingModule { }
