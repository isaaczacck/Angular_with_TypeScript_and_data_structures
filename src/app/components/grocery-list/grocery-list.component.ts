import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {

  grocery:string [] = ["Coffee", "Coffee Mate", "Sugar"];
  newGrocery:string = "";

  addGrocery(){
    if (this.newGrocery.trim()){
      this.grocery.push(this.newGrocery);
      this.newGrocery = "";
    }
  }

  deleteGrocery(grocery:string){
    this.grocery = this.grocery.filter(g => g !== grocery);
  }
}
