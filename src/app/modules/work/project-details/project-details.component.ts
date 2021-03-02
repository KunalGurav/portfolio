import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {ProjectDetail} from './project-detail.model';
import {PROJECTS} from './project-details.constant';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  customOptions: OwlOptions = {
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  };

  project: ProjectDetail;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.project = PROJECTS.find(pro => pro.id === params.get('id'));
      }
    });
  }

}
