
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(true);
  constructor() { }

  showLoader() {
    this.isLoading.next(true)
  }
  hideLoader() {
    this.isLoading.next(false)
  }
  getLoaderVal(): Observable<any> {
    return this.isLoading.asObservable()
  }
}
