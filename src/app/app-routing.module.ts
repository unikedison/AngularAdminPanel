import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "user/:id",
    component: UserViewComponent
  },
  {
    path: "product/:id",
    component: ProductViewComponent
  },
  {
    path: "create-user",
    component: CreateUserComponent
  },
  {
    path: "add-product",
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
