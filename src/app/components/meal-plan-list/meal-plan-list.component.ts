import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css']
})
export class MealPlanListComponent {
  mealItems: string[] = [
    'Breakfast: Oatmeal',
    'Lunch: Chicken with rice',
    'Dinner: Carbonara',
    'Snack: Bread'
  ];

  newMeal: string = '';

  addMeal() {
    if (this.newMeal.trim()) {
      this.mealItems.push(this.newMeal);
      this.resetInputs();
    }
  }

  deleteMeal(meal: string) {
    this.mealItems = this.mealItems.filter(item => item !== meal);
  }

  resetInputs() {
    this.newMeal = '';
  }
}
