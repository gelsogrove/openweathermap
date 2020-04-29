import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherRestService } from 'src/app/services/weather.rest.service';
import { Weather } from 'src/app/models/Weather.model';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WeatherHistoryRestService } from 'src/app/services/weatherforescast.rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  search: string;
  weatherCity: Weather;
  weatherCityForestcast : Weather[];
  errormessage: string;
  unsubscribe$ = new Subject<void>();

  constructor(private weatherRestservice : WeatherRestService,private WeatherHistoryRestService : WeatherHistoryRestService) {
  }

  ngOnInit(){
    this.search = this.getLocalstorage();
    if (this.search){
      this.searchCity();
    }
  }

  onSubmit() {
    this.searchCity();
  }


  searchCity(){
     
    if (!this.search) return;

    let firstcall = this.weatherRestservice.getCityWeather(this.search).pipe(takeUntil(this.unsubscribe$));
    let secondcall = this.WeatherHistoryRestService.getForcastCityWeather(this.search).pipe(takeUntil(this.unsubscribe$));

    forkJoin([firstcall, secondcall]).subscribe(results => {
      this.resetResults();
      this.weatherCity = results[0];
      this.weatherCityForestcast = results[1];
      this.setLocalStorage();
    }, error => {
      this.resetResults();
      this.errormessage = error.error.message;
    });
    
  }
  

  resetResults(){
    this.errormessage = '';
    this.weatherCity = null;
    this.weatherCityForestcast = null;
  }
  
  setLocalStorage()  {
     localStorage.setItem('lastSearchedCity',this.search);
  }

  getLocalstorage():string{
    return localStorage.getItem('lastSearchedCity');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
