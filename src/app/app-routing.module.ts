import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WatchListComponent } from './movies/watch-list/watch-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'search-page', component: SearchPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
