import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

  animal: string[] = ['dog', 'Monkey'];
  newAnimal: string = '';

  addFruit() {
    if (this.newAnimal.trim()) {
      this.animal.push(this.newAnimal);
      this.newAnimal = ''; // Clear input after adding
    }
  }

  deleteFruit(animal: string) {
    this.animal = this.animal.filter(a => a !== animal); // Remove the fruit from the list
  }
}
