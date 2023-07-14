import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmpService } from 'src/app/emp.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent {
  employees : any
  constructor( private emp : EmpService, private http : HttpClient) {}
  ngOnInit(){
    this.tableData()
  }
  tableData(){
    this.emp.getTableData().subscribe((res: any) =>{
      this.employees = res;
      console.log(res ,"res");
      
    },
     (error: any) => {                              //Error callback
      console.error('Request failed with error')
      alert(error);
    },
    () => {                                   //Complete callback
      console.log('Request completed')
    })
  }
}
