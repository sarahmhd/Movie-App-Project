import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';

@Component({
  selector: 'app-watch-list-card',
  templateUrl: './watch-list-card.component.html',
  styleUrls: ['./watch-list-card.component.css']
})
export class WatchListCardComponent {
  constructor(private watchListService:WatchlistService){}
  ngOnInit(){
    this.watchListService.getWatchList()
  }
}
