import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  visibility: BehaviorSubject<boolean>;

  constructor() {
    this.visibility = new BehaviorSubject(false);
  }

  show() {
    // console.log('SHOW SPINNER');
    this.visibility.next(true);
  }

  hide() {
    // console.log('HIDE SPINNER');
    this.visibility.next(false);
  }

}
