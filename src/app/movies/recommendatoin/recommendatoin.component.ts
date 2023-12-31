import { Component, Input } from '@angular/core';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-recommendatoin',
  templateUrl: './recommendatoin.component.html',
  styleUrls: ['./recommendatoin.component.css']
})
export class RecommendatoinComponent {
  @Input() movie!: MovieDetails
  recommendation!: Array<MovieInterface>
  // isRecommend: boolean = true
  page: number = 1
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
