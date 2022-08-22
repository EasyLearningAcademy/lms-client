import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'signup', component: UsersignupComponent },
    {path: 'login', component: UserloginComponent},
    {path: 'userpage', component: UserpageComponent},
    {path: 'course', component: CourseComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

    {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
