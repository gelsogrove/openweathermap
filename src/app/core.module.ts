
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './components/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
 imports:[  
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,    
    LayoutModule,
],
 declarations: [],
 exports: [ AppRoutingModule, BrowserModule, LayoutModule]
})
export class CoreModule { }