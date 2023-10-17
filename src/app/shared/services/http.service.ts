import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=38e4b66e657f3d989c1734581f25c5e7`)
  }

  getMovieDetails(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/678512?api_key=38e4b66e657f3d989c1734581f25c5e7`)
  }
}


