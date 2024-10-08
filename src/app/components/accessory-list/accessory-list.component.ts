import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent {
  accessoryItems: string[] = ["Watch", "ring", "Sunglasses"];

  newAccessory: string = '';

  addAccessory() {
    if (this.newAccessory.trim()) {
      this.accessoryItems.push(this.newAccessory);
      this.resetInputs();
    }
  }

  deleteAccessory(accessory: string) {
    this.accessoryItems = this.accessoryItems.filter(item => item !== accessory);
  }

  resetInputs() {
    this.newAccessory = '';
  }
}
