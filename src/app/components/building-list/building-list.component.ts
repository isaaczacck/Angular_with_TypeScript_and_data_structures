import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent {
  buildingItems: string[] = ['Burj Khalifa'];

  newBuilding: string = '';

  addBuilding() {
    if (this.newBuilding.trim()) {
      this.buildingItems.push(this.newBuilding);
      this.resetInputs();
    }
  }

  deleteBuilding(building: string) {
    this.buildingItems = this.buildingItems.filter(item => item !== building);
  }

  resetInputs() {
    this.newBuilding = '';
  }
}
