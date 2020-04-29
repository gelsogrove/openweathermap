import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SdkTagsModule } from './sdk-tags/sdk-tags.module';
import { WeatherRestService } from './services/weather.rest.service';
import { WeatherHistoryRestService } from './services/weatherforescast.rest.service';

@NgModule({
 imports: [FlexLayoutModule, SdkTagsModule],
 declarations: [],
 providers:[WeatherRestService, WeatherHistoryRestService],
 exports: [FlexLayoutModule, SdkTagsModule]
})
export class SharedModule { }