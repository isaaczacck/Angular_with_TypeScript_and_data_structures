import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {
  tvShows: { title: string; url: string }[] = [
    { title: 'Spider-Man: The Animated Series', url: 'https://www.netflix.com/title/70142366' },
    { title: 'Ultimate Spider-Man', url: 'https://www.netflix.com/title/80033056' },
    { title: 'Spider-Man: Into the Spider-Verse', url: 'https://www.netflix.com/title/81010453' },
    { title: 'Spider-Man: The New Animated Series', url: 'https://www.netflix.com/title/70142576' },
    { title: 'Spider-Man: Maximum Venom', url: 'https://www.netflix.com/title/81255043' }
  ];

  newTvShowTitle: string = '';
  newTvShowUrl: string = '';

  addTvShow() {
    if (this.newTvShowTitle.trim() && this.newTvShowUrl.trim()) {
      this.tvShows.push({
        title: this.newTvShowTitle,
        url: this.newTvShowUrl,
      });
      this.resetInputs();
    }
  }

  deleteTvShow(tvShow: { title: string; url: string }) {
    this.tvShows = this.tvShows.filter(ts => ts.title !== tvShow.title);
  }

  resetInputs() {
    this.newTvShowTitle = '';
    this.newTvShowUrl = '';
  }
}
