import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {

  carmodel: string [] = ["Honda Civic", "Ford Mustang","Toyota Corolla"];
  newCarmodel: string = '';

  addCarmodel(){
    if (this.newCarmodel.trim()){
      this.carmodel.push(this.newCarmodel);
      this.newCarmodel = '';   //clear input after adding 
    }
  }
  deleteCarmodel(carmodel:string){
    this.carmodel = this.carmodel.filter(cm => cm != carmodel); // delete carmodel
  }
}
