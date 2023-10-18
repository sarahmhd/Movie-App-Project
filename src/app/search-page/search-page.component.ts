import { Component } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { MovieInterface } from '../interfaces/movie-interface';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchVal!: string
  searchedArr!: Array<MovieInterface>
  page: number = 1

  constructor(private searchService: SearchService, private http: HttpService) { }

  ngOnInit() {
    this.searchService.getValue().subscribe(data => { this.searchVal = data; console.log(data) });
    this.http.getSearchedProducts(this.searchVal).subscribe(data => { this.searchedArr = data.results; })
  }

}
