import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  counter: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getCounter() {
    return this.counter
  }

  incCounter() {
    this.counter.next(this.counter.value + 1)
  }

  decCounter() {
    this.counter.next(this.counter.value - 1)
  }
}
