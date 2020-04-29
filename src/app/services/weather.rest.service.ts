import {Injectable, ɵConsole, Inject} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, filter, catchError} from 'rxjs/operators';
import { Weather } from '../models/Weather.model';
import { MY_TOKEN } from '../app.module';
import { NodeWithI18n } from '@angular/compiler';

 
 
@Injectable()
export class WeatherRestService  {
    baseurl = 'http://api.openweathermap.org/data/2.5';
    
    constructor(private http: HttpClient,@Inject(MY_TOKEN) public token: string) {}

    getCityWeather(city:string): Observable<Weather> {
        return this.http.get(this.baseurl + '/weather?q=' + city + '&appid=' + this.token + '&units=metric')
        .pipe(
            map(result => this.convertData(result)),
            catchError(error => throwError(error))
        )
    }


   convertData(json) : Weather {
    return  new Weather({
            date: Date.now(),
            temp_min: Math.round(json.main.temp_min),
            temp_max: Math.round(json.main.temp_max) ,
            humidity: json.main.humidity,
            description : json.weather[0].description,
            icon : json.weather[0].icon,
        });
    }
}
