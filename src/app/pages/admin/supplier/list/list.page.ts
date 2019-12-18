import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {SupplierService} from '../supplier.service';

export interface Supplier {
  name: string;
  id: string;
  position: number;
  employees: number;
  projects: number;
}

@Component({
  selector: 'app-admin-supplier-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class AdminSupplierListPage implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'projects', 'employees'];
  dataSource;
  selection;
  suppliers;

  constructor(private supplierSvc: SupplierService) {
    supplierSvc.list().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Supplier>(res);
      this.selection = new SelectionModel<Supplier>(true, []);
    });
  }

  ngOnInit() {

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
  checkboxLabel(row?: Supplier): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  open() {
  }
}
