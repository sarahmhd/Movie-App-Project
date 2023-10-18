import { Component } from '@angular/core';
import { CounterServiceService } from 'src/app/shared/services/counter-service.service';
import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { Router } from '@angular/router';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';
import { faBugSlash } from '@fortawesome/free-solid-svg-icons'
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  faHeartBroken = faHeartCrack;
  counter!: number
  watchListArr!: Array<MovieInterface>
  constructor(private router: Router, private counterService: CounterServiceService, private watchListService: WatchlistService) { }
  ngOnInit() {
    this.counterService.getCounter().subscribe(data => this.counter = data)
    this.watchListArr = this.watchListService.getWatchList()
  }

  ngDoCheck() {
    console.log("hello")
    this.watchListArr = this.watchListService.getWatchList()

  }
  backHome() {
    this.router.navigate(['/'])
  }
}
