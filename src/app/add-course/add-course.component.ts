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

  fileSrc = null;
  coverImageSrc= null;

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
      coverImage: ['', Validators.required],
      courseFile: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log("Hello world")
  }
  public favoriteSeason = "";
  seasons: string[] = ['Free', 'Paid'];

  // getFreePaid() {
  //   return this.addCourse.get('freePaid');
  // }


  onFileChange(event:any) {
    // this.fileSrc = <File>event.target.files[0];
    let img = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = ()=>{
      this.fileSrc = reader.result as string;
      this.addCourse.patchValue({courseFile: reader.result});
    }
  }


  onCoverImageChange(event:any) {
    // this.coverImageSrc = <File>event.target.files[0];
    let img = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload =()=>{
      this.coverImageSrc = reader.result as string;
      this.addCourse.patchValue({coverImage: reader.result})
    }
  }

  saveCourse() {
    const formData = new FormData();
    formData.append('courseName', this.addCourse.get('courseName')?.value)
    formData.append('category', this.addCourse.get('courseCategory')?.value)
    formData.append('courseDescription', this.addCourse.get('courseDescription')?.value)
    formData.append('freePaid', this.addCourse.get('freePaid')?.value)
    formData.append('price', this.addCourse.get('price')?.value)
    formData.append('courseFile', this.addCourse.get('courseFile')?.value)
    formData.append('coverImage', this.addCourse.get('coverImage')?.value)

    const obj = {
      courseName: this.addCourse.get('courseName').value,
      courseCategory: this.addCourse.get('courseCategory').value,
      courseDescription: this.addCourse.get('courseDescription').value,
      freePaid: this.addCourse.get('freePaid').value,
      price: this.addCourse.get('price').value,
      // courseFile: this.addCourse.get('courseFile').value,
      // coverImage: this.addCourse.get('coverImage').value,

    }
    console.log(obj)
    this._Auth.addCourse({obj}).subscribe(res=> {
      console.log(res);
    },

    err=>console.log(err));
  }
}
