import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FeedbackService} from './feedback.service';
import {SpinnerService} from '../../../overlay-spinner/spinner.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup;
  isFormSubmitted: boolean;
  isLoading: boolean;
  error: string;

  constructor(private feedbackService: FeedbackService, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.isFormSubmitted = false;
    this.feedbackForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onFormSubmit() {
    this.isFormSubmitted = true;
    if (this.feedbackForm.valid) {
      this.isLoading = true;
      this.spinnerService.show();
      this.feedbackService.addNewFeedback({...this.feedbackForm.value, createdAt: new Date().toUTCString()}).subscribe(value => {
        console.log(value);
        this.feedbackForm.reset();
        this.isLoading = false;
        this.spinnerService.hide();
        this.isFormSubmitted = false;
      }, error => {
        this.error = error.toString();
        this.isLoading = false;
        this.spinnerService.hide();
      });
    }
  }

}
