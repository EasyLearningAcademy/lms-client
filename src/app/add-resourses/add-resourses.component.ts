import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/Auth/auth.service';
import { AddResourcesService} from '../services/add-resources.service'


@Component({
  selector: 'app-add-resourses',
  templateUrl: './add-resourses.component.html',
  styleUrls: ['./add-resourses.component.css']
})
export class AddResoursesComponent implements OnInit {

  public resourcesAlreadyExists = false;
  public resourcesErrorMessage = '';
  public errorOccurred = false;
  public errorOccurredMessage = '';

  public fileSrc =''

  firstFormGroup = this._formBuilder.group({
    resourcesName: ['', Validators.required],
    resourcesFile: ['', Validators.required]
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = true;

  constructor(
    private  _formBuilder: FormBuilder,
    private _addresouces: AddResourcesService,
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any){
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = ()=> {
      this.fileSrc = reader.result as string;
      this.firstFormGroup.patchValue({resourcesFile: reader.result});
      console.log(this.firstFormGroup.get('resourcesFile').value);
    }
  }

  
  secondStep() {
    if(this.firstFormGroup.invalid){
      console.log("Form is Invald")
    }else {
      let resourcesName = this.firstFormGroup.get('resourcesName').value;
      let resourcesFile = this.firstFormGroup.get('resourcesFile').value;

      let resourcesObject = {resourcesName, resourcesFile};
      this._addresouces.addResources(resourcesObject).subscribe((res: any)=> {
        if (res.status == true) {
          console.log("Successfully");
        }else if(res.errorOccurred == true){
          console.log(res)
          this.errorOccurred = true;
          this.errorOccurredMessage = res.massage;
        }else if (res.isExist == true ) {
          console.log(res)
          this.resourcesAlreadyExists = true;
          this.resourcesErrorMessage = res.message;
        }
      },
      err=>(console.log(err))
      )
    }
  }

}
