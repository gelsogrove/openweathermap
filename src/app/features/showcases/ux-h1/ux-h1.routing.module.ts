
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UxH1Component} from './ux-h1.component';

const routes: Routes = [
  { path: '', component: UxH1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UxH1RoutingModule { }
