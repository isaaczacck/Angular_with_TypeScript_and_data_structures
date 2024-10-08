import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {

  vege: string [] = ["Carrots", "Cabbage", "Pumpkin"];
  newVege: string = '';

  addVege(){
    if(this.newVege.trim()){
      this.vege.push(this.newVege);
      this.newVege = '';
    }
  }
  deleteVege(vege:string){
    this.vege = this.vege.filter(v => v != vege) //delete
  }
}
