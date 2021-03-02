import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ProjectDetail} from '../modules/work/project-details/project-detail.model';
import {PROJECTS} from '../modules/work/project-details/project-details.constant';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('backToTop', {static: true}) backToTop: ElementRef;
  customOptions: OwlOptions = {
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  };

  projects: ProjectDetail[] = PROJECTS;

  constructor(private renderer: Renderer2) {
  }

  /**
   * This function is used to change the color of navbar on scroll.
   */
  @HostListener('window:scroll', ['$event'])
  onNavBarScroll(e) {
    if (window.pageYOffset > 100) {
      this.renderer.addClass(this.backToTop.nativeElement, 'show');
      // this.mainNav.nativeElement.classList.add('header-scrolled');
    } else {
      this.renderer.removeClass(this.backToTop.nativeElement, 'show');
      // this.mainNav.nativeElement.classList.remove('header-scrolled');
    }
  }

  ngOnInit(): void {
  }

}
