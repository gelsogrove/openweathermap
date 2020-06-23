import {Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MY_TOKEN } from '../../configs/app-settings.config';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, @Inject(MY_TOKEN) public token: string) {}
}
