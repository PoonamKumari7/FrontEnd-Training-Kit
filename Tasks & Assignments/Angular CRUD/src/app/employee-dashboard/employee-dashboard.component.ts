import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelobj : Employee = new Employee();
  //added employee property to get employee data
  employeeData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;
  //modalService: any;
  constructor(private formbuilder : FormBuilder, private api : ApiService) { }
  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      //id : [''],
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile :[''],
      salary : ['']
    })
    //when application runs this method gets called from api
    this.getAllEmployee(); 
  }

  //method to hide update on click Add
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  //for posting method to api
  postEmployeeDetails() {
    //this.employeeModelobj.id = this.formValue.value.id;
    this.employeeModelobj.firstName = this.formValue.value.firstName;
    this.employeeModelobj.lastName = this.formValue.value.lastName;
    this.employeeModelobj.email = this.formValue.value.email;
    this.employeeModelobj.mobile = this.formValue.value.mobile;
    this.employeeModelobj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelobj)
    .subscribe(res => {
      console.log(res);
      alert("Employee Added Successfully")
      let reference = document.getElementById('cancel')
      reference?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    error=>{
      alert("Something went wrong !");
    })
  }


  //get all employee to table
  getAllEmployee() {
    this.api.getEmployee()
    .subscribe(res => {
      this.employeeData = res;

    })
  }

  //delete employee
  deleteEmployeeById(row : any) {
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted")
      //it will refresh the page on click event
      this.getAllEmployee();
    })
  }

  //Update employee
  onEdit(row : any) {
    this.formValue.reset();
    this.showAdd = false;
    this.showUpdate = true;

    this.employeeModelobj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails() {
    this.employeeModelobj.firstName = this.formValue.value.firstName;
    this.employeeModelobj.lastName = this.formValue.value.lastName;
    this.employeeModelobj.email = this.formValue.value.email;
    this.employeeModelobj.mobile = this.formValue.value.mobile;
    this.employeeModelobj.salary = this.formValue.value.salary;

    this.api.updateEmployee(this.employeeModelobj, this.employeeModelobj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let reference = document.getElementById('cancel')
      reference?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })

  }



}


