import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/models/Weather.model';

@Component({
  selector: 'ux-weatherInfo',
  templateUrl: './ux-weatherInfo.component.html',
  styleUrls: ['./ux-weatherInfo.component.scss']
})
export class UXWeatherInfoComponent {

    @Input() data ;
    @Input() label: Weather;
    printData:Array<any> = new Array();

    ngOnChanges(){
      this.printData= [];
      if (Array.isArray(this.data)){
        this.printData = this.data;
      }else{
        this.printData.push(this.data);
      }
      
    }
}
