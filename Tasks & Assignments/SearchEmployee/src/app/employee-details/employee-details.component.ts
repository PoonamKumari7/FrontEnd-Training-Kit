import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../iemployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeData!: Iemployee[];
  searchValue !: string;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/Employee1.json')
    .subscribe((res: any )=> {
      this.employeeData = res;
    });
  }

}
