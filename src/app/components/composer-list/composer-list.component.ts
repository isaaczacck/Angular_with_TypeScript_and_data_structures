import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {
  composerItems: string[] = ["Ben&Ben", "Moira Dela Torre", "TJ monterde"];

  newComposer: string = '';

  addComposer() {
    if (this.newComposer.trim()) {
      this.composerItems.push(this.newComposer);
      this.resetInputs();
    }
  }

  deleteComposer(composer: string) {
    this.composerItems = this.composerItems.filter(item => item !== composer);
  }

  resetInputs() {
    this.newComposer = '';
  }
}
