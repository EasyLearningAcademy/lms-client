import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public addCourse: FormGroup;

  // public courseCategory = "";

  public courseCategories: Array<string> = ['Programming', 'Graphics Design', 'Business', 'Politics', 'Sports', 'Technology'];

  constructor(
    private _fb: FormBuilder,
    private _Auth: AuthService
  ) { 
    this.addCourse = this._fb.group({
      courseName: ['', Validators.required],
      courseCategory: ['Programming', Validators.required],
      courseDescription: ['', Validators.required],
      freePaid: ['Free'],
      price: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    // console.log(this.addCourse.controls.courseName.value);
    console.log("Hello world")
  }
  public favoriteSeason = "";
  seasons: string[] = ['Free', 'Paid'];

  // getFreePaid() {
  //   return this.addCourse.get('freePaid');
  // }

  saveCourse() {
    this._Auth.addCourse(this.addCourse.value).subscribe(res=> {
      console.log(res);
    },
    
    err=>console.log(err));
  }
}
