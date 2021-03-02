import {Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('isTransparent') isTransparent: boolean;
  @ViewChild('mainNav', {static: true}) mainNav: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  /**
   * This function is used to change the color of navbar on scroll.
   */
  @HostListener('window:scroll', ['$event'])
  onNavBarScroll(e) {
    if (window.pageYOffset > 100) {
      this.renderer.addClass(this.mainNav.nativeElement, 'header-scrolled');
    } else {
      this.renderer.removeClass(this.mainNav.nativeElement, 'header-scrolled');
    }
  }

  ngOnInit(): void {
    if(this.isTransparent) {
      this.renderer.addClass(this.mainNav.nativeElement, 'header-transparent');
    }else{
      this.renderer.removeClass(this.mainNav.nativeElement, 'header-transparent');
    }
  }

}
