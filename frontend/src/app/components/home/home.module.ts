import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListModule } from '../student-list/student-list.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbNavModule,
    StudentListModule
  ]
})
export class HomeModule { }
