import {Component} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {ProjectService} from '../../project/project.service';
import {EmployeeService} from '../../employee/employee.service';
import {SupplierService} from '../../supplier/supplier.service';

@Component({
  selector: 'app-admin-dashboard-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss']
})
export class AdminDashboardManagerPage {
  projects;
  employees;
  user = this.authSvc.currentUser;
  count = {
    project: 0,
    employee: 0,
    supplier: 0
  };

  constructor(private authSvc: AuthService,
              private projectSvc: ProjectService,
              private employeeSvc: EmployeeService,
              private supplierSvc: SupplierService) {
    console.log(this.user);
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

}