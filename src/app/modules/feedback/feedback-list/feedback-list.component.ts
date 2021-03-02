import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../shared/feedback-form/feedback.service';
import {Feedback} from '../../shared/feedback-form/feedback.model';
import {SpinnerService} from '../../../overlay-spinner/spinner.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.fetchFeedback();
  }

  fetchFeedback() {
    this.spinnerService.show();
    this.feedbackService.getAllFeedback().subscribe(result => {
      if (result) {
        this.feedbacks = result;
      }
      this.spinnerService.hide();
    });
  }

  onDeleteClick(id: string) {
    this.feedbackService.deleteFeedback(id).subscribe( result => {
      console.log(result);
      this.fetchFeedback();
    });
  }

}
