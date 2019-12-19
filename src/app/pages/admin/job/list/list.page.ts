import {Component} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {JobService} from '../job.service';

export interface Project {
  name: string;
  contract: string;
  department: string;
  employee: string;
  id: string;
  position: number;
  suppliers: number;
  employees: number;
  status: string;
}

@Component({
  selector: 'app-admin-job-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class AdminJobListPage {

  displayedColumns: string[] = ['select', 'post', 'level', 'qualification', 'project', 'supplier', 'years', 'nums', 'price', 'actions'];
  dataSource;
  selection = new SelectionModel<Project>(true, []);

  constructor(private jobService: JobService) {
    jobService.list().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Project>(res);
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
  checkboxLabel(row?: Project): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
