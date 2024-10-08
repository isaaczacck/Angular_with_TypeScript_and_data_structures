import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  artistItems: string[] = [
    'Leonardo da Vinci',
    'Vincent van Gogh',
  ];

  newArtist: string = '';

  addArtist() {
    if (this.newArtist.trim()) {
      this.artistItems.push(this.newArtist);
      this.resetInputs();
    }
  }

  deleteArtist(artist: string) {
    this.artistItems = this.artistItems.filter(item => item !== artist);
  }

  resetInputs() {
    this.newArtist = '';
  }
}
