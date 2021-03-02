import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxScrollspyModule} from '@uniprank/ngx-scrollspy';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LandingComponent} from './landing/landing.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlaySpinnerComponent} from './overlay-spinner/overlay-spinner.component';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OverlaySpinnerComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxScrollspyModule.forRoot(),
    RouterModule.forRoot([
      {path: 'feedback', loadChildren: () => import('./modules/feedback/feedback.module').then(mod => mod.FeedbackModule)},
      {path: 'project-details', loadChildren: () => import('./modules/work/work.module').then(mod => mod.WorkModule)},
      {path: '', component: LandingComponent}
    ], {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
