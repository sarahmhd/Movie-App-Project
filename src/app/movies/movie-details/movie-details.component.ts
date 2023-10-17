import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faLink, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { HttpService } from 'src/app/shared/services/http.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  faStar = faStar
  faLink = faLink
  faHeart = faHeart
  regularHeart = regularHeart
  id!: number | string
  movie!: MovieDetails


  
}
