import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {

  food:string [] = ["Adobo", "Sisig", "lasagna"];
  newFood:string = "";

  addFoods(){
    if(this.newFood.trim()){
      this.food.push(this.newFood);
      this.newFood = "";
    }
  }
  deleteFoods(food:string){
    this.food = this.food.filter( f => f !== food);  //delete
  }
}
