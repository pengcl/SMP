import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPage} from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.AdminDashboardPageModule)
      },
      {
        path: 'dashboard/hr',
        loadChildren: () =>
          import('./dashboard/hr/hr.module').then(m => m.AdminDashboardHrPageModule)
      },
      {
        path: 'dashboard/employee',
        loadChildren: () =>
          import('./dashboard/employee/employee.module').then(m => m.AdminDashboardEmployeePageModule)
      },
      {// 项目例表
        path: 'project/list',
        loadChildren: () =>
          import('./project/list/list.module').then(m => m.AdminProjectListPageModule)
      },
      {// 项目详情
        path: 'project/item/:id',
        loadChildren: () =>
          import('./project/item/item.module').then(m => m.AdminProjectItemPageModule)
      },
      {// 供应商例表
        path: 'supplier/list',
        loadChildren: () =>
          import('./supplier/list/list.module').then(m => m.AdminSupplierListPageModule)
      },
      {// 供应商详情
        path: 'supplier/item/:id',
        loadChildren: () =>
          import('./supplier/item/item.module').then(m => m.AdminSupplierItemPageModule)
      },
      {
        path: 'employee/list',
        loadChildren: () =>
          import('./employee/list/list.module').then(m => m.AdminEmployeeListPageModule)
      },
      {
        path: 'employee/item/:id',
        loadChildren: () =>
          import('./employee/item/item.module').then(m => m.AdminEmployeeItemPageModule)
      },
      {
        path: 'job/list',
        loadChildren: () =>
          import('./job/list/list.module').then(m => m.AdminJobListPageModule)
      },
      {
        path: 'job/item/:id',
        loadChildren: () =>
          import('./job/item/item.module').then(m => m.AdminJobItemPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
