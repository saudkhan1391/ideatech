import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { ProdFormComponent } from './components/product/product-form2/prod-form/prod-form.component';


const routes: Routes = [
  { path: "sales", component: SalesComponent },
  {
    path: 'addProduct', component: ProdFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
