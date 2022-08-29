import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public addCourse: FormGroup;

  public courseCategory = "";

  constructor(
    private _fb: FormBuilder
  ) { 
    this.addCourse = this._fb.group({
      courseName: ['', Validators.required],
      courseCategory: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    // console.log(this.addCourse.controls.courseName.value);
    console.log("Hello world")
  }
  public favoriteSeason = "";
  seasons: string[] = ['Free', 'Paid'];

  saveCourse() {
    console.log("Hello world")
    let courseName = this.addCourse.controls.courseName.value;
    // let courseCategory = this.addCourse.controls.courseCategory.value

    let courseObj = {
      courseName,
    }

    console.log(courseObj);
  }
}
