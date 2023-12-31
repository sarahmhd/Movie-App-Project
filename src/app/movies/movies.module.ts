import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../shared/header/header.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecommendatoinComponent } from './recommendatoin/recommendatoin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WatchListCardComponent } from './watch-list-card/watch-list-card.component';
import { WatchListComponent } from './watch-list/watch-list.component';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    RecommendatoinComponent,
    WatchListCardComponent,
    WatchListComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxPaginationModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MovieCardComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    RecommendatoinComponent,
    WatchListCardComponent,
    WatchListComponent
  ]
})
export class MoviesModule { }
