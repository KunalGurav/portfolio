import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import {FeedbackListComponent} from './feedback-list/feedback-list.component';


@NgModule({
  declarations: [
    FeedbackListComponent,
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
