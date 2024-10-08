import { Component } from '@angular/core';

@Component({
  selector: 'app-development-tools-list',
  templateUrl: './development-tools-list.component.html',
  styleUrl: './development-tools-list.component.css'
})
export class DevelopmentToolsListComponent {

  toolItems: string[] = [
    'Visual Studio Code',
    'Git',
    'Postman',
    'Docker'
  ];

  newTool: string = '';

  addTool() {
    if (this.newTool.trim()) {
      this.toolItems.push(this.newTool);
      this.resetInputs();
    }
  }

  deleteTool(tool: string) {
    this.toolItems = this.toolItems.filter(item => item !== tool);
  }

  resetInputs() {
    this.newTool = '';
  }
}
