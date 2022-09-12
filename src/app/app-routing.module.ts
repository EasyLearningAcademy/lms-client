import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { DesignComponent } from './categories-list/design/design.component';
import { DevelopmentComponent } from './categories-list/development/development.component';
import { ItSoftwareComponent } from './categories-list/it-software/it-software.component';
import { PersonalDevelopmentComponent } from './categories-list/personal-development/personal-development.component';
import { BusinessComponent } from './categories-list/business/business.component';
import { PhotographyComponent } from './categories-list/photography/photography.component';
import { MusicComponent } from './categories-list/music/music.component';
import { MarketingComponent } from './categories-list/marketing/marketing.component';
import { AddResoursesComponent } from './add-resourses/add-resourses.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserpageComponent},
  {path: 'signup', component: UsersignupComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'resources', component: AddResoursesComponent},
  {path: "user", component: NavComponent, children: [
    {path:"dashboard", component: DashboardComponent},
    {path: "my-courses", component: UserCoursesComponent},
    {path:"add-course", component: AddCourseComponent},
  ]},
  {path: 'login', component: UserloginComponent},
  {path: 'course', component: CourseComponent},
  {path: 'categories',  children: [
    {path: 'design', component: DesignComponent},
    {path: 'development', component: DevelopmentComponent},
    {path: 'marketing', component: MarketingComponent},
    {path: 'it-and-software', component: ItSoftwareComponent},
    {path: 'personal-development', component: PersonalDevelopmentComponent},
    {path: 'business', component: BusinessComponent},
    {path: 'photography', component: PhotographyComponent},
    {path: 'music', component: MusicComponent}
  ]},
  {path: 'about', component: AboutComponent},

  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
