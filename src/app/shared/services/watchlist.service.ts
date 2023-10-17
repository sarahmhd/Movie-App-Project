import { Injectable } from '@angular/core';
import { MovieInterface } from 'src/app/interfaces/movie-interface';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchList: Array<MovieInterface> = []

  constructor() { }

  addToWatchList(movie: MovieInterface) {
    this.watchList.push(movie)
  }

  removeFromWatchList(id: number) {
    this.watchList = this.watchList.filter(movie => movie.id !== id)
  }

  getWatchList() {
    return this.watchList;
  }
}
