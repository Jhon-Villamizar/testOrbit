import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.initFrom();
  }

  onSubmit(): void {
    const data = this.studentForm.value;
    this.studentService.createStudent(data);
    this.studentForm.reset();
    alert('New Student Registered');
  }

  private initFrom(): void {
    this.studentForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Grade: new FormControl('', [Validators.required]),
      EnrollmentDate: new FormControl('', [Validators.required])
    });
  }

}
