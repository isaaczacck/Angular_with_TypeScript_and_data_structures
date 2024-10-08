import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent {
  budgetItems: string[] = [
    'Marketing: ₱8,000',
    'Development: ₱10,000',
    'Design: ₱30,000',
    'Miscellaneous: ₱5,0000'
  ];

  newBudget: string = '';

  addBudget() {
    if (this.newBudget.trim()) {
      this.budgetItems.push(this.newBudget);
      this.resetInputs();
    }
  }

  deleteBudget(budget: string) {
    this.budgetItems = this.budgetItems.filter(item => item !== budget);
  }

  resetInputs() {
    this.newBudget = '';
  }
}
