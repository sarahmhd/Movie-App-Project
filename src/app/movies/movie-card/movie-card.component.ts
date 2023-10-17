import { Component, Input } from '@angular/core';
import { faEllipsis, faHeart as golden } from '@fortawesome/free-solid-svg-icons'

import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { faHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: MovieInterface
  faEllipsis = faEllipsis
  goldenHeart = golden
  faHeart = faHeart


  checkAdded() {

  }
}
