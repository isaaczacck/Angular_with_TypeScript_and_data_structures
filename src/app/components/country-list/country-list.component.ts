import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

  country:string [] = ["Canda", "USA", "Japan"];
  newCounrty: string = '';

  addCounrty(){
    if(this.newCounrty.trim()){
      this.country.push(this.newCounrty);
      this.newCounrty = '';
    }
  }
  deleteCounrty(country:string){
    this.country = this.country.filter( c => c != country) // remove
  }
}
