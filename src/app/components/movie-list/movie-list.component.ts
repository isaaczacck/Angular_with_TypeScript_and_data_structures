import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movie: string [] = ["Man in Love", "Spider-Man 2", "Cars"];
  newMovie: string = '';

  addMovie(){
    if (this.newMovie.trim()){
      this.movie.push(this.newMovie);
      this.newMovie = '';   //clear input after adding 
    }
  }
  deleteMovie(movie:string){
    this.movie = this.movie.filter(c => c != movie); // delete movie
  }
}
