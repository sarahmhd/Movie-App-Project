import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'

import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { MovieInterface } from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  faArrowLeft = faLessThan
  faArrowRight = faGreaterThan

  movies !: Array<MovieInterface>

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getMovies().subscribe(data => { this.movies = data.results })
  }

  fakeArr(movies: number) {
    return Array(movies).fill(0)
  }

}
