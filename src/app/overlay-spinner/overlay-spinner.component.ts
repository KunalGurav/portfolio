import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SpinnerService} from './spinner.service';
import {SpinnerState} from './spinner-state.model';

@Component({
  selector: 'app-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.css']
})
export class OverlaySpinnerComponent implements OnInit, AfterContentChecked, OnDestroy {
  show = false;
  private subscription: Subscription;

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.subscription = this.spinnerService.spinnerState.subscribe(
      (state: SpinnerState) => {
        this.show = state.show;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterContentChecked(): void {
    this.subscription = this.spinnerService.spinnerState.subscribe((state: SpinnerState) => {
      console.log('Overlay State : ' + state.show);
      this.show = state.show;
    });
  }
}
