import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmpService } from 'src/app/emp.service';
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
  private url = "http://localhost:3000/emp"
  employees : any[]= []
  model = new User();
  isShow : boolean = false;
  isTable : boolean = true
  filterText:string = '';
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
  constructor( private emp : EmpService, private http : HttpClient) {}
  ngOnInit(){
    this.tableData()
  }
  tableData(){
    this.emp.getTableData().subscribe((res: any) =>{
      this.employees = res;
      console.log(res ,"res");
    })
  }
  onSubmit(form: any) {
    console.log(form.value);
    this.emp.pushTableData(this.model).subscribe((res: any) =>{
  
      console.log(res ,"res");
    })
    form.reset();
    this.isShow = false
    this.isTable = true
  }
  showForm(){
    this.isShow = true
    this.isTable = false    
  }
  close(form : any){

  }
}
