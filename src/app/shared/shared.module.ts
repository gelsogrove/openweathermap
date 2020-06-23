import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SdkTagsModule } from '../ux-tags/sdk-tags.module';

@NgModule({
 imports: [FlexLayoutModule, SdkTagsModule],
 declarations: [],
 providers: [],
 exports: [FlexLayoutModule, SdkTagsModule]
})
export class SharedModule { }
