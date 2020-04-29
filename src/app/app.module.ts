import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { CoreModule } from './core.module';

export const MY_TOKEN = new InjectionToken<string>('MyToken');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
  ],
  providers: [
    { provide: MY_TOKEN, useValue: 'f1fed2fb4b86f425523bee4b30feaeab' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
