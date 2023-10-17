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
  totalPages !: number
  page: number = 1
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getMovies().subscribe(data => { this.totalPages = data.total_pages; this.movies = data.results })
    this.page = this.http.getNumber()
  }

  fakeArr(movies: number) {
    return Array(movies).fill(0)
  }

  pageChanged(e: any) {
    this.page = e;
    this.http.setNumber(e)
    this.http.getMovies().subscribe(data => { this.movies = data.results })
  }
}
