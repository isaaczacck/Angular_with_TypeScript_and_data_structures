import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {

  music: string [] = ["Synesthesia", "Eight Letters", "Imagination"];
  newMusic: string = "";

  addMusic(){
    if (this.newMusic.trim()){
      this.music.push(this.newMusic);
      this.newMusic = "";
    }
  }
  deleteMusic(music:string){
    this.music = this.music.filter( m => m !== music);  //delete
  }
}
