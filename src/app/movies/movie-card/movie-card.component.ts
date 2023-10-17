import { Component, Input } from '@angular/core';
import { faEllipsis, faHeart as golden } from '@fortawesome/free-solid-svg-icons'

import { CounterServiceService } from 'src/app/shared/services/counter-service.service';
import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';
import { count } from 'rxjs';
import { faHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: MovieInterface
  faEllipsis = faEllipsis
  goldenHeart = golden
  faHeart = faHeart

  exit: any
  counter!: number
  watchList!: Array<MovieInterface>

  constructor(private counterService: CounterServiceService, private watchListService: WatchlistService) { }

  ngOnInit() {
    this.counterService.getCounter().subscribe(data => this.counter = data)
    this.watchList = this.watchListService.getWatchList()
    this.exit = this.watchListService.getWatchList().find(movie => movie.id == this.movie.id)
    this.exit ? this.movie.isAdded = true : this.movie.isAdded = false
  }

  setProgress(progress: number) {
    const degrees = (360 * progress) / 100;
    return `transform:rotate(${degrees}deg)`;
  }

  checkAdded() {
    this.movie.isAdded = !this.movie.isAdded
    if (this.movie.isAdded) {
      this.counterService.setCounter(++this.counter);
      this.watchListService.addToWatchList({ ...this.movie, isAdded: this.movie.isAdded })
    } else {
      this.counterService.setCounter(--this.counter);
      this.watchListService.removeFromWatchList(this.movie.id)
      this.watchList = this.watchListService.getWatchList()
    }
  }
}
