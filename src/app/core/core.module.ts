import { CommonModule } from '@angular/common';
import {InjectionToken, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppSettings, MY_TOKEN } from '../configs/app-settings.config';



@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    LayoutModule,
  ],
  declarations: [],
  providers: [{ provide: MY_TOKEN, useValue: AppSettings.myToken }],
  exports: [ AppRoutingModule, BrowserModule, LayoutModule]
})
export class CoreModule { }
