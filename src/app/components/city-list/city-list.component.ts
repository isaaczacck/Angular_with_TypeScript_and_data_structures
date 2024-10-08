import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {

  city: string [] = ["Caloocan City", "Quezon City"];
  newCity: string = '';

  addCity(){
    if (this.newCity.trim()){
      this.city.push(this.newCity);
      this.newCity = '';   //clear input after adding 
    }
  }
  deleteCity(city:string){
    this.city = this.city.filter(c => c != city); // delete city
  }
}
