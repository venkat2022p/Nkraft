import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {


  constructor(private http : HttpClient) { }
  api ="http://localhost:3000/emp"
  getTableData(){
    return this.http.get(this.api)
  }
  pushTableData(model : any){
    return this.http.post(this.api, model)
  }
}
