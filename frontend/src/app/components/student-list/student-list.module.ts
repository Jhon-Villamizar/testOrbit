import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentFormRoutingModule } from './student-list-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    RouterModule,
    StudentFormRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentListModule { }
