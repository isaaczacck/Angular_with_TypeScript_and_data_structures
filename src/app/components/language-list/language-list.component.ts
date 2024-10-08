import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {

  language: string[] = ['Italian', 'Spanish'];
  newLanguage: string = '';

  addLanguage() {
    if (this.newLanguage.trim()) {
      this.language.push(this.newLanguage);
      this.newLanguage = ''; // Clear input after adding
    }
  }

  deleteLanguage(language: string) {
    this.language = this.language.filter(l => l !== language); // Remove the fruit from the list
  }
}
