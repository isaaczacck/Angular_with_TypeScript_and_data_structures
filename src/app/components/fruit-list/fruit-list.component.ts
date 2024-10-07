import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
})
export class FruitListComponent {
  fruits: string[] = ['Apple', 'Banana'];
  newFruit: string = '';

  addFruit() {
    if (this.newFruit.trim()) {
      this.fruits.push(this.newFruit);
      this.newFruit = ''; // Clear input after adding
    }
  }

  deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit); // Remove the fruit from the list
  }
}
