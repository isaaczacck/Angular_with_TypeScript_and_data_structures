import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {

  tool: string[] = ['Adjustable Wrench', 'Allen Wrench'];
  newTool: string = '';

  addTool() {
    if (this.newTool.trim()) {
      this.tool.push(this.newTool);
      this.newTool = ''; // Clear input after adding
    }
  }

  deleteTool(tool: string) {
    this.tool = this.tool.filter(a => a !== tool); // Remove the fruit from the list
  }
}
