import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent {
  flowers: string[] = ["Roses", "Tulips", "Lilies"];
  newFlower: string = '';

  addFlower() {
    if (this.newFlower.trim()) {
      this.flowers.push(this.newFlower);
      this.newFlower = '';
    }
  }

  deleteFlower(item: string) {
    this.flowers = this.flowers.filter(f => f !== item);
  }
}
