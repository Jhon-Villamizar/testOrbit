import { Injectable } from '@angular/core';
import { StudentModel } from '../Models/student';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  readonly URL_API = 'https://localhost:5001/api/Student';

  getStudents(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  createStudent(data: StudentModel): Subscription {
    return this.http.post(this.URL_API, data).subscribe();
  }

  editStudent(data: StudentModel): Subscription {
    return this.http.put(this.URL_API + `/${data.id}`, data).subscribe();
  }

  deleteStudent(id: number): Subscription {
    return this.http.delete(this.URL_API + `/${id}`).subscribe();
  }

}
