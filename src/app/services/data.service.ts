import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  private _dataCell: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getDataCell() {
    return this._dataCell
  }

  incrementDataCell(): void {
    this._dataCell.next(this._dataCell.value + 1)
  }

  decrementDataCell(): void {
    this._dataCell.next(this._dataCell.value - 1)
  }
}
