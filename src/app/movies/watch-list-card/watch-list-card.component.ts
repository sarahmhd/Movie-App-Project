import { Component, Input } from '@angular/core';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

import { CounterServiceService } from 'src/app/shared/services/counter-service.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';

@Component({
  selector: 'app-watch-list-card',
  templateUrl: './watch-list-card.component.html',
  styleUrls: ['./watch-list-card.component.css']
})
export class WatchListCardComponent {
  @Input() movie!: MovieInterface
  isAdded: boolean = true
  counter!: number
  faHeart = faHeart
  faStar = faStar

  constructor(private watchListService: WatchlistService, private counterService: CounterServiceService) { }
  ngOnInit() {
    this.watchListService.getWatchList()
    this.counterService.getCounter().subscribe(data => this.counter = data)
  }

  checkAdded() {
    this.watchListService.removeFromWatchList(this.movie.id)
    this.counterService.setCounter(--this.counter)
  }

  fakeArr(num: number) {
    return Array(Math.floor(num)).fill(0)
  }
}
