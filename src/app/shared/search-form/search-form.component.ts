import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MovieInterface } from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  ngOnInit() {
  }

  directToSearchPage(form: any) {
   
  }
}
