import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeedbackFormComponent
  ],
  exports: [
    FooterComponent,
    FeedbackFormComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
