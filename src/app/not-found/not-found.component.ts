import { Component } from '@angular/core';
import { faSadTear } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  faSadTear = faSadTear
}
