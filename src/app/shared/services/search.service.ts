import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue = new BehaviorSubject<string>('')
  private searchedResultArr = new BehaviorSubject<[]>([])
  constructor() { }

  setValue(newValue: string) {
    this.searchValue.next(newValue)
  }
  getValue(): Observable<any> {
    return this.searchValue.asObservable()
  }

  getSearchedArr(): Observable<any> {
    return this.searchedResultArr.asObservable();
  }

  setSearchedArr(newArr: any) {
    this.searchedResultArr.next(newArr);
  }

  getArr() {
    return this.searchedResultArr
  }
}
