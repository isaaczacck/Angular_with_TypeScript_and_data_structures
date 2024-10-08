import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css']
})
export class StationeryListComponent {
  stationery: string[] = ["Pens", "Pencils", "Notebooks"];
  newStationery: string = '';

  addStationery() {
    if (this.newStationery.trim()) {
      this.stationery.push(this.newStationery);
      this.newStationery = '';
    }
  }

  deleteStationery(item: string) {
    this.stationery = this.stationery.filter(s => s !== item);
  }
}
