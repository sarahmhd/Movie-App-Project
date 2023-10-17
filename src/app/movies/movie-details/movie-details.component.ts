import { faHeart, faLink, faStar } from '@fortawesome/free-solid-svg-icons'

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CounterServiceService } from 'src/app/shared/services/counter-service.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  faStar = faStar
  faLink = faLink
  faHeart = faHeart
  regularHeart = regularHeart
  id!: number | string
  movie!: MovieDetails
  exit: any
  isAdded: boolean = false
  counter!: number

  constructor(private watchListService: WatchlistService, private counterService: CounterServiceService, private activateRoute: ActivatedRoute, private http: HttpService, private watchlistService: WatchlistService) { }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id']
    this.http.getMovieDetails(this.id).subscribe(data => this.movie = data)
    this.counterService.getCounter().subscribe(data => this.counter = data)
    this.exit = this.watchlistService.getWatchList().find(movie => movie.id == this.id)
    if (this.exit) {
      this.isAdded = true
    } else {
      this.isAdded = false
    }
  }

  fakeArr(num: number) {
    return Array(Math.floor(num)).fill(0)
  }

  checkAdded() {
    this.isAdded = !this.isAdded
    if (this.isAdded) {
      this.counterService.setCounter(++this.counter);
      this.watchListService.addToWatchList(this.movie)
    } else {
      this.counterService.setCounter(--this.counter);
      this.watchListService.removeFromWatchList(this.movie.id)
    }
  }
}
