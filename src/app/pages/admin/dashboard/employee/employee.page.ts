import {Component} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {ProjectService} from '../../project/project.service';

@Component({
  selector: 'app-admin-dashboard-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss']
})
export class AdminDashboardEmployeePage {
  user = this.authSvc.currentUser;
  projects;

  constructor(private authSvc: AuthService, private projectSvc: ProjectService) {
    projectSvc.find({employees: this.user.employee.id}).subscribe(res => {
      this.projects = res;
    });
  }

}
