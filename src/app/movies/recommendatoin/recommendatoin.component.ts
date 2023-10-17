import { Component, Input } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MovieInterface } from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'app-recommendatoin',
  templateUrl: './recommendatoin.component.html',
  styleUrls: ['./recommendatoin.component.css']
})
export class RecommendatoinComponent {
  @Input() movie!: MovieDetails
  recommendation!: Array<MovieInterface>
  // isRecommend: boolean = true
  constructor(private http: HttpService) { }
  ngOnInit() {
    this.http.getRecommendation(this.movie.id).subscribe(data => this.recommendation = data.results)
    // if (this.recommendation == undefined || this.recommendation == null) {
    //   this.isRecommend = false
    // } else {
    //   this.isRecommend = true
    // }
  }
}
