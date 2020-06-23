import {InjectionToken} from '@angular/core';

export interface IAppSettings {
  appTitle: string;
  myToken: string;
  showHeader: boolean;
  showSidebar: boolean;
  showFooter: boolean;
}

export const AppSettings: IAppSettings = {
  appTitle: 'Star kit',
  myToken: 'f1fed2fb4b86f425523bee4b30feaeab',
  showHeader : true,
  showSidebar : true,
  showFooter: true,
};

export const MY_TOKEN = new InjectionToken<string>('MyToken');

