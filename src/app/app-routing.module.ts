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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserpageComponent},
  {path: 'signup', component: UsersignupComponent },
  {path: 'contact', component: ContactComponent},
  {path: "user", component: NavComponent, children: [
    {path:"dashboard", component: DashboardComponent},
    {path: "my-courses", component: UserCoursesComponent},
    {path:"add-course", component: AddCourseComponent},
  ]},
  {path: 'login', component: UserloginComponent},
  {path: 'course', component: CourseComponent},
  {path: 'about', component: AboutComponent},

  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
