import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {ProjectService} from '../../project/project.service';
import {EmployeeService} from '../../employee/employee.service';
import {SupplierService} from '../../supplier/supplier.service';

@Component({
  selector: 'app-admin-dashboard-hr',
  templateUrl: './hr.page.html',
  styleUrls: ['./hr.page.scss']
})
export class AdminDashboardHrPage implements AfterViewInit {
  projects;
  employees;
  user = this.authSvc.currentUser;
  count = {
    project: 0,
    employee: 0,
    supplier: 0
  };
  colSize = 4;
  @ViewChild('content', {static: false}) private content;

  constructor(private authSvc: AuthService,
              private projectSvc: ProjectService,
              private employeeSvc: EmployeeService,
              private supplierSvc: SupplierService) {
    projectSvc.count().subscribe(res => {
      this.count.project = res;
    });
    employeeSvc.count().subscribe(res => {
      this.count.employee = res;
    });
    supplierSvc.count().subscribe(res => {
      this.count.supplier = res;
    });
    projectSvc.list().subscribe(res => {
      this.projects = res;
    });
    employeeSvc.list().subscribe(res => {
      this.employees = res;
    });
  }

  ngAfterViewInit() {
    console.log(this.content.elementRef.nativeElement.clientWidth);
    if (this.content.elementRef.nativeElement.clientWidth > 1000) {
      this.colSize = 2;
    }
    if (this.content.elementRef.nativeElement.clientWidth > 1400) {
      this.colSize = 2;
    }
  }

}
