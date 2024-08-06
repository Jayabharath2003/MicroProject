import { Component } from '@angular/core';
import { Student } from './model/student';
import { StudentService } from './studentman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student : Student;
  result:string;
  studentArr:Student[];
  flag:boolean;
stuId: any;
stuName: any;
stuSalary: any;
  
  constructor(private service:StudentService) {
  this.student = new Student();
  this.result="";
  this.studentArr=[];
  this.flag=false;
  
  }
  
insertStudent(data:any) {
  
  this.student.id =data.stuId;
  this.student.stuName=data.stuName;
  this.student.stuSalary=data.stuSalary;

  this.result=this.service.insertStudent(this.student);
  
  }

  updateStudent(data: any) {
  
    this.student.id =data.stuId;
    this.student.stuName =data.stuName;
    this.student.stuSalary =data.stuSalary;
  
    this.result=this.service.updateStudent(this.student);
  }

  deleteStudent(data: any) {
  
    this.result=this.service.deleteStudent(data.stuId);
  }

  findStudent(data: any) {
  
    this.student=this.service.findStudent(data.stuId);
    this.result=this.student.id+" "+this.student.stuName+" "+this.student.stuSalary;
}
findAllStudent(){
  this.studentArr=this.service.findAllStudent();
  this.flag=true;
}
}