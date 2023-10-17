import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  private counter = new BehaviorSubject<number>(0);
  constructor() { }

  setCounter(newCnt: number) {
    this.counter.next(newCnt)
  }

  getCounter() {
    return this.counter.asObservable()
  }

}
