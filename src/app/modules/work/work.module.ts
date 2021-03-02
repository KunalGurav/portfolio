import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
    imports: [
        CommonModule,
        CarouselModule,
        WorkRoutingModule,
        SharedModule
    ]
})
export class WorkModule { }
