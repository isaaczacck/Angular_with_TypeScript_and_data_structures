import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {

  frameworkItems: string[] = [
    'Angular',
    'React',
  ];

  newFramework: string = '';

  addFramework() {
    if (this.newFramework.trim()) {
      this.frameworkItems.push(this.newFramework);
      this.resetInputs();
    }
  }

  deleteFramework(framework: string) {
    this.frameworkItems = this.frameworkItems.filter(item => item !== framework);
  }

  resetInputs() {
    this.newFramework = '';
  }
}
