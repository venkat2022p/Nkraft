import { Component } from '@angular/core';
export class User {
  public name!: string;
  public email!: string;
  public empDeprt!: string;
  public EmpDesgntn! : string;
  public salary! : string;
  public empTask! : string;
  public empStatus! : string;
  public empReport! : string;
}
@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent {
  employees : any[]= []
  model = new User();
  isShow : boolean = false;
  isTable : boolean = true
  empReport: string [] = [
    'CTO',
    'Manager',
    'Team Leader'
  ]
  empStatus: string[] = [
    "Active",
    "In-active"
  ]
  empTask : string[] = [
    'Working in Progress',
    'Not Working'
  ]
  empDeprt: string[] = [
    'IT',
    'ADMIN',
    'NON-IT',
    'HR',
  ];
  EmpDesgntn: string[] = [
    'ForntEnd Developer',
    'Backend Developer',
    'Devops Developer',
    'PowerBi Developer',
  ];
  constructor() {}
  ngOninit(){
  }
  onSubmit(form: any) {
    console.log(form.value);
    localStorage.setItem("UserData",JSON.stringify(form.value));
    this.employees.push(form.value)
    var  employees = JSON.stringify(localStorage.getItem('UserData'))
    console.log(employees);
    
    // return this.employees = this.employees
    //  this.employees = new User(Data)
    this.employees
    form.reset();
    this.isShow = false
    this.isTable = true
// return this.employees = JSON.stringify(localStorage.getItem('UserData'))

  }
  showForm(){
    this.isShow = true
    this.isTable = false    
  }
}
