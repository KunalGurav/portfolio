import { Injectable } from '@angular/core';
import {SpinnerState} from './spinner-state.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loaderSubject = new Subject<SpinnerState>();
  spinnerState = this.loaderSubject.asObservable();

  constructor() {
  }

  /**
   * This function is used to show loader on top of any screen.
   */
  show() {
    this.loaderSubject.next({show: true} as SpinnerState);
  }

  /**
   * This function is used to hide loader.
   */
  hide() {
    this.loaderSubject.next({show: false} as SpinnerState);
  }
}
