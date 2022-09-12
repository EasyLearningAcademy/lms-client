import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResoursesComponent } from './add-resourses.component';

describe('AddResoursesComponent', () => {
  let component: AddResoursesComponent;
  let fixture: ComponentFixture<AddResoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
