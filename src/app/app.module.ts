
import { BrowserModule , DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { AwardsComponent } from './awards/awards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './reviews/review/review.component';
import { BannerComponent } from './banner/banner.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TrustpilotComponent } from './trustpilot/trustpilot.component';
import { BannerMobileComponent } from './banner-mobile/banner-mobile.component';
import { YtVideoModule } from 'yt-optimized-video';
@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    AwardsComponent,
    ReviewsComponent,
    ReviewComponent,
    BannerComponent,
    FaqsComponent,
    TrustpilotComponent,
    BannerMobileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    YtVideoModule
  ],
  exports:[TrustpilotComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
