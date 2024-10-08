import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {

  libraryItems: string[] = ["TypeScript", "Bootstrap"];

  newLibrary: string = '';

  addLibrary() {
    if (this.newLibrary.trim()) {
      this.libraryItems.push(this.newLibrary);
      this.resetInputs();
    }
  }

  deleteLibrary(library: string) {
    this.libraryItems = this.libraryItems.filter(item => item !== library);
  }

  resetInputs() {
    this.newLibrary = '';
  }
}
