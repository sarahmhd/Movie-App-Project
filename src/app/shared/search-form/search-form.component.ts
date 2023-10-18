import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MovieInterface } from 'src/app/interfaces/movie-interface';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  searchedArr!: Array<MovieInterface>
  searchValue !: string
  constructor(private searchService: SearchService, private http: HttpService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.searchService.getValue().subscribe(data => this.searchValue = data)
  }

  directToSearchPage(form: any) {
    let val = form.form.controls.search.value;
    if (val != '') {
      this.searchService.setValue(val);
      this.searchService.setSearchedArr(this.searchedArr)
      if (this.activatedRoute.snapshot.routeConfig?.path == '' || this.activatedRoute.snapshot.routeConfig?.path == '/') {
        this.router.navigate(['search-page']);
      } else {
        this.searchService.setValue(val);
        this.http.getSearchedProducts(val).subscribe(data => { this.searchedArr = data.results; })
        this.searchService.setSearchedArr(this.searchedArr)
      }
    }
  }
}
