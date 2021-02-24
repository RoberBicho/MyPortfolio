import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

declare function init_plugins();

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private gtmService : GoogleTagManagerService
  ) {
    const navEndEvents$ = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-XSJ2NSDR1N', {
        'page_path': event.urlAfterRedirects
      });
    })
  }

  selectedwallet = '1';
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2
     },
      940: {
       items: 3
     }
    },
   nav: true
  }
  
  ngOnInit() {
    // init_plugins();
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }

  cv() {
    const gtmTag = {
      event: 'button-click',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);
  }
}
