import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxH1Component } from './ux-h1/ux-h1.component';
import { UXWeatherInfoComponent } from './ux-weatherInfo/ux-weatherInfo.component';

@NgModule({
  declarations: [UxH1Component,UXWeatherInfoComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    UxH1Component, 
    UXWeatherInfoComponent
  ]
})
export class SdkTagsModule { }