import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiHistoriaComponent } from './mi-historia/mi-historia.component';
import { BooksComponent } from './books/books.component';
import {MatTabsModule} from '@angular/material/tabs';
// import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    TimelineComponent,
    BreadcrumbComponent,
    MiHistoriaComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule
    // Mugan86GoogleAnalyticsModule.forRoot(
    //   {
    //     analyticsId: 'G-XSJ2NSDR1N',
    //     showLog: true
    //   }
    // )
    
    
  ],
  providers: [
    {provide: 'googleTagManagerId', useValue: 'GTM-N2ZJJFX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
