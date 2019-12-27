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
  items: any[] = Array(31)
    .fill(0)
    .map((_v: any, i: number) => i);

  constructor(private authSvc: AuthService, private projectSvc: ProjectService) {

  }

}
