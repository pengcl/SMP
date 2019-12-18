import {Component} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {EmployeeService} from '../employee.service';

export interface Employee {
  name: string;
  id: string;
  position: number;
  inTime: string;
  outTime: string;
  period: number;
  post: string;
  level: string;
  projects: any;
  attendance: number;
  status: string;
}

@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class AdminEmployeeListPage {

  displayedColumns: string[] = [
    'select',
    'name',
    'post',
    'level',
    'projects',
    'inTime',
    'outTime',
    'period',
    'attendance',
    'status'
  ];
  selection = new SelectionModel<Employee>(true, []);
  dataSource;

  constructor(private employeeSvc: EmployeeService) {
    employeeSvc.list().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Employee>(res);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
