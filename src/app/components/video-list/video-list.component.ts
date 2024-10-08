import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  // Sample data for videos
  videos: { title: string; url: string }[] = [
    { title: 'Angular Bootstrap', url: 'https://youtu.be/BI2BsmDvIyM' },
    { title: 'Angular Tutorial', url: 'https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ' },
    { title: 'JavaScript Essentials', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
  ];

  newVideoTitle: string = '';
  newVideoUrl: string = '';

  // Add new video to the list
  addVideo() {
    if (this.newVideoTitle.trim() && this.newVideoUrl.trim()) {
      this.videos.push({
        title: this.newVideoTitle,
        url: this.newVideoUrl,
      });
      this.resetInputs();
    }
  }

  // Remove a video from the list
  deleteVideo(video: { title: string; url: string }) {
    this.videos = this.videos.filter(v => v.title !== video.title);
  }

  // Reset input fields
  resetInputs() {
    this.newVideoTitle = '';
    this.newVideoUrl = '';
  }
}
