import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee: string[] = ['floor devi', 'lin G', 'Peter Pan'];
  newEmployee: string = '';

  addemployee() {
    if (this.newEmployee.trim()) {
      this.employee.push(this.newEmployee);
      this.newEmployee = ''; // Clear input after adding
    }
  }

  deleteemployee(employee: string) {
    this.employee = this.employee.filter(e => e !== employee); // Remove the student from the list
  }
}
