import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/Models/student';
import { StudentService } from '../../services/student.service';
import { tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];
  studentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getData();
    this.studentForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Grade: new FormControl('', [Validators.required]),
      EnrollmentDate: new FormControl('', [Validators.required])
    });
  }

  getData(): void {
    this.studentService.getStudents()
    .pipe(
      tap(students => this.students = students),
    )
      .subscribe();
  }

  removeStudent(data: StudentModel): void {
    const remove = confirm('Are You Sure You Want To Remove This Student?');
    if (!remove) {
    } else {
      this.studentService.deleteStudent(data.id);
      window.location.reload();
    }
  }

  // !Modal
  open(content, student): void {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static'
    });
    this.studentForm.patchValue({
      id: student.id,
      FirstName: student.firstName,
      LastName: student.lastName,
      Grade: student.grade,
      EnrollmentDate: student.enrollmentDate
    });
  }

  onSubmit(): void {
    this.modalService.dismissAll();
    this.studentService.editStudent(this.studentForm.getRawValue());
    window.location.reload();
  }

}
