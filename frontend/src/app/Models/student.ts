export interface StudentModel {
  id?: number;
  FirstName: string;
  LastName: string;
  Grade: string;
  EnrollmentDate?: number;
}
export class StudentClass implements StudentModel {
  id?: number;
  FirstName: string;
  LastName: string;
  Grade: string;
  EnrollmentDate?: number;

  constructor(data: StudentModel) {
    Object.assign(this, data);
    return this;
  }
}
