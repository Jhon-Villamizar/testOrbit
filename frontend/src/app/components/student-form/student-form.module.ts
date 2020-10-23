import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form.component';
import { StudentFormRoutingModule } from './student-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    StudentFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentFormModule { }
