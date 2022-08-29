import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';
import {Course} from '../../../models/course';
import {CourseStudent} from '../../../models/coursestudent';
import {Router} from '@angular/router';
import { Resume } from './resume';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { WorkBook, WorkSheet, WritingOptions, read, writeFileXLSX as writeFile, utils, version, set_cptable } from 'xlsx';


import { VidhyaschoolService } from 'src/app/services/vidhyaschool.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isReceipt=false;
  courseList: Array<Course>;
  errorMessage: string;
  infoMessage: string;
  currentUser: User;
  resume = new Resume();
  tempObj:object;
  months = [
    { id: 3, name:"Mar"},
    { id: 2, name:"Feb"},
    { id: 1, name:"Jan"},
    { id: 12, name:"Dec"},
    { id: 11, name:"Nov"},
    { id: 10, name:"Oct"},
    { id: 9, name:"Sep"},
    { id: 8, name:"Aug"},
    { id: 7, name:"Jul"},
    { id: 6, name:"Jun"},
    { id: 5, name:"May"},
    { id: 4, name:"Apr"}
];
  resume1={
    profilePic: '',
    address: '',
    contactNo: 0,
    email: '',
    socialProfile: '',
    name: '',
    id: 0,
    recieptDate: '',
    className: '',
    section: '',
    rollNo: 0,
    tuitionFee: 0,
    admissionFee:0,
    transportFee:0,
    examinationFee:0,
    miscellaneousFee:0,
    prantiyaNidhi:0,
    compititionFee:0,
    registrationFee:0,
    libarayFee:0,
    otherFee:0,
    receivedByDetail:'',
    transactionId:0,
    paymentReceivedDate:'',
    bankName:'',
    amountWord:'',
    totalAmount:0
  } ;

  exlData:any;
  url:string="assets/files/test.xls";
  json1:string;
  json2:string;
  excelData:any;
 
  allReceiptDetails: Object;

  constructor(private userService: UserService, private router: Router,private _http:HttpClient,private vSchoolServices: VidhyaschoolService) {
    this.currentUser = this.userService.currentUserValue;
    


    
  }

  ngOnInit() {
    this.getLatestReceiptDetails();


  }
//https://www.youtube.com/watch?v=n5VzGpFzrEY


 

  cleanForm(){
    console.log("clear form");
    
    this.isReceipt=false;
    window.location.reload();// from here whole page is reloading
    // event.preventDefault();
    //this.resume=new Resume();
  }
  addRecieptDetails(){
    //this.vidhyaStuden.recieptId=4;
console.log(this.resume);
    this.vSchoolServices.createUser(this.resume).subscribe((res)=>{
     // console.log("payment Reciept",res);
      // this.tempObj=res.json();
      this.resume1=JSON.parse(JSON.stringify(res));
      this.isReceipt=true;
     
      // console.log("dtabase response ",this.tempObj);
      //console.log("dtabase response ",this.resume1.id)
      //this.getLatestReceiptDetails();
    });
  }

  getLatestReceiptDetails(){
    this.vSchoolServices.getAllUsers().subscribe(res=>{
        this.allReceiptDetails=res;
       // console.log(this.allReceiptDetails);
    });
  }

  editRecipt(recipt){
    this.isReceipt=true;

  }
  editReceiptDetails(){

  }
  deleteReceiptDetails(recipt){
    this.vSchoolServices.deleteUser(recipt).subscribe(()=>{
      this.getLatestReceiptDetails();
    });
  }

  updateReceiptDetails(){
    this.isReceipt=false;
    this.vSchoolServices.updateUser(this.resume).subscribe(()=>{
      this.getLatestReceiptDetails(); 
    });
  }



}
