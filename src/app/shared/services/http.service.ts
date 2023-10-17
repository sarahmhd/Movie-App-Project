import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  page: number = 1

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=38e4b66e657f3d989c1734581f25c5e7&page=${this.page}`)
  }

  getMovieDetails(id: number | string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=38e4b66e657f3d989c1734581f25c5e7`)
  }

}
