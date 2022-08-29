import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable,throwError} from 'rxjs';


import { Resume } from '../components/user/home/resume';

let API_URL = "http://localhost:3000/students";


@Injectable({
  providedIn: 'root'
})
export class VidhyaschoolService {

  // public currentStudent: Observable<Studentvidhya>;
 
  // headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }

 createUser(student: Resume){
  return this.http.post(API_URL,student).pipe(catchError(this.errorHandler));;
 }
 getAllUsers(){
  return this.http.get(API_URL).pipe(catchError(this.errorHandler));
 }
 updateUser(student: Resume){
  return this.http.put("http://localhost:3000/students/"+student.id,student).pipe(catchError(this.errorHandler));
 }
 deleteUser(student: Resume){
  return this.http.delete("http://localhost:3000/students/"+student.id).pipe(catchError(this.errorHandler));
 }



  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
}

  // findAllCoursesOfStudent(studentId: string): Observable<any> {
  //   this.setHeaders();
  //   return this.http.get(STUDENT_API_URL + "courses/"+studentId, {headers: this.headers});
  // }

  // enroll(courseStudent: CourseStudent): Observable<any> {
  //   this.setHeaders();
  //   return this.http.post(STUDENT_API_URL + "enroll", JSON.stringify(courseStudent), {headers: this.headers});
  // }

  // saveJsonFile(student: Studentvidhya){

  //   const fileJson = new File([JSON.stringify(student)], "../assets/files/vidhyastudent.json", {type: "application/json'"});
  //          const form = new FormData();
  //     form.append('file', fileJson);
  //   console.log("successfull",student);

   
  // }
}
