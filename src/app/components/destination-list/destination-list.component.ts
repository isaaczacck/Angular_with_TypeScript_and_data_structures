import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent {
  destinations: string[] = ["Paris", "Tokyo", "New York"];
  newDestination: string = '';

  addDestination() {
    if (this.newDestination.trim()) {
      this.destinations.push(this.newDestination);
      this.newDestination = '';
    }
  }

  deleteDestination(item: string) {
    this.destinations = this.destinations.filter(d => d !== item);
  }
}
