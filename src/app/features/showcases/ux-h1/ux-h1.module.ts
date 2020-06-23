import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxH1Component } from './ux-h1.component';
import { SharedModule } from '../../../shared/shared.module';
import {UxH1RoutingModule} from './ux-h1.routing.module';

@NgModule({
  declarations: [UxH1Component],
  imports: [
    CommonModule,
    UxH1RoutingModule,
    SharedModule
  ]
})
export class UxH1Module { }
