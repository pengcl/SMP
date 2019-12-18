import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminSupplierItemPage} from './item.page';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: AdminSupplierItemPage}])
  ],
  declarations: [AdminSupplierItemPage]
})
export class AdminSupplierItemPageModule {
}
