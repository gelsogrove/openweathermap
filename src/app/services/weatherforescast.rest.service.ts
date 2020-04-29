import {Injectable, ɵConsole, Inject} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, filter, catchError} from 'rxjs/operators';
import { Weather } from '../models/Weather.model';
import { MY_TOKEN } from '../app.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
 

 
 
@Injectable()
export class WeatherHistoryRestService  {
    baseurl = 'http://api.openweathermap.org/data/2.5';
    
    constructor(private http: HttpClient,@Inject(MY_TOKEN) public token: string) {}

    getForcastCityWeather(city:string): Observable<Weather[]> {
        return this.http.get<any>(this.baseurl + '/forecast/daily?q=' + city + '&appid=' + this.token + '&units=metric&ctn=3')
        .pipe(
            map(result => this.convertData(result)),
            catchError(error => throwError(error))
        )
    }

   convertData(json): Weather[] {
        return json.list.map(element => {
           
            return new Weather({
                date: element.dt * 1000,
                temp_min: Math.round(element.temp.min),
                temp_max: Math.round(element.temp.max),
                humidity: element.humidity,
                description : element.weather[0].description,
                icon : element.weather[0].icon,

            });
            
        });
        
    }
}
