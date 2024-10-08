import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {
  exerciseItems: string[] = [
    'Push-ups',
    'Squats',
    'Plank',
  ];

  newExercise: string = '';

  addExercise() {
    if (this.newExercise.trim()) {
      this.exerciseItems.push(this.newExercise);
      this.resetInputs();
    }
  }

  deleteExercise(exercise: string) {
    this.exerciseItems = this.exerciseItems.filter(item => item !== exercise);
  }

  resetInputs() {
    this.newExercise = '';
  }
}
