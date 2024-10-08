import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {

  tours: { name: string; location: string; date: string }[] = [
    { name: 'Nothing', location: 'Philipine Arena', date: '2024-11-04' }
  ];

  newTourName: string = '';
  newLocation: string = '';
  newDate: string = '';

  addTour() {
    if (this.newTourName.trim() && this.newLocation.trim() && this.newDate.trim()) {
      this.tours.push({
        name: this.newTourName,
        location: this.newLocation,
        date: this.newDate
      });
      this.resetInputs();
    }
  }

  deleteTour(tour: { name: string; location: string; date: string }) {
    this.tours = this.tours.filter(t => t !== tour);
  }

  resetInputs() {
    this.newTourName = '';
    this.newLocation = '';
    this.newDate = '';
  }
}
