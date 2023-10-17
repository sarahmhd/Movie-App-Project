import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsCardComponent } from './movie-details-card/movie-details-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { RecommendatoinComponent } from './recommendatoin/recommendatoin.component';
import { WatchListCardComponent } from './watch-list-card/watch-list-card.component';
import { WatchListComponent } from './watch-list/watch-list.component';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieDetailsCardComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    RecommendatoinComponent,
    WatchListCardComponent,
    WatchListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
