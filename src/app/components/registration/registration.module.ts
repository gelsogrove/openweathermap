import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
