import { Component } from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';
import { count } from 'rxjs';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHeart = regHeart
  solidHeart = faHeart

  isAdded: boolean = false
  counter: number = 0

  constructor(private counterService: CounterServiceService) { }

  ngOnInit() {
    this.counterService.getCounter().subscribe(data => this.counter = data)
  }
}
