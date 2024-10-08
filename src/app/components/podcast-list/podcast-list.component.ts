import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent {
  
  podcast: { title: string; url: string }[] = [
    { title: 'RDR TALK', url: 'https://www.youtube.com/@BossRDRofficial' },
    { title: 'toni talks', url: 'https://www.youtube.com/@ToniGonzagaStudio' },
  ];

  newVideoTitle: string = '';
  newVideoUrl: string = '';

  // Add new video to the list
  addVideo() {
    if (this.newVideoTitle.trim() && this.newVideoUrl.trim()) {
      this.podcast.push({
        title: this.newVideoTitle,
        url: this.newVideoUrl,
      });
      this.resetInputs();
    }
  }

  // Remove a video from the list
  deleteVideo(podcast: { title: string; url: string }) {
    this.podcast = this.podcast.filter(p => p.title !== podcast.title);
  }

  // Reset input fields
  resetInputs() {
    this.newVideoTitle = '';
    this.newVideoUrl = '';
  }
}
