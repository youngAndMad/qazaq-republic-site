import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http'
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { HomeComponent } from './components/navigation/home/home.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SavingsComponent } from './components/savings/savings.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { QuizResultPageComponent } from './components/quiz/quiz-result-page/quiz-result-page.component';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InfoSectionComponent,
    CarouselComponent,
    WhyUsComponent,
    ProductListComponent,
    WelcomeContainerComponent,
    ContactUsComponent,
    SavingsComponent,
    QuizComponent,
    QuizResultPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
