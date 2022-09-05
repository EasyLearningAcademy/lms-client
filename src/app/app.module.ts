import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { MatTableModule} from '@angular/material/table';
import { AddCourseComponent } from './add-course/add-course.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CourseComponent } from './course/course.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { ContactComponent } from './contact/contact.component';
import { OurBestComponent } from './our-best/our-best.component';
import { InterceptorService } from './services/Interceptor/interceptor.service';
import { CategoriesComponent } from './categories/categories.component';
import { DesignComponent } from './categories-list/design/design.component';
import { DevelopmentComponent } from './categories-list/development/development.component';
import { MarketingComponent } from './categories-list/marketing/marketing.component';
import { ItSoftwareComponent } from './categories-list/it-software/it-software.component';
import { PersonalDevelopmentComponent } from './categories-list/personal-development/personal-development.component';
import { BusinessComponent } from './categories-list/business/business.component';
import { PhotographyComponent } from './categories-list/photography/photography.component';
import { MusicComponent } from './categories-list/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TransactionHistoryComponent,
    AddCourseComponent,
    UserCoursesComponent,
    NavbarComponent,
    UserpageComponent,
    FooterComponent,
    AboutComponent,
    CourseComponent,
    ContactComponent,
    NotfoundComponent,
    OurBestComponent,
    UserloginComponent,
    UsersignupComponent,
    CategoriesComponent,
    DesignComponent,
    DevelopmentComponent,
    MarketingComponent,
    ItSoftwareComponent,
    PersonalDevelopmentComponent,
    BusinessComponent,
    PhotographyComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatTooltipModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
