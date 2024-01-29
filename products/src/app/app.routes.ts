import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [ {
  path:"",
  // component: ProductComponent,
  redirectTo: '/products',
  pathMatch:"full"
},
{
  path: "products",
  component: ProductComponent,
  title: "products"
},

{
  path: "products/:id",
  component: ProductDetailsComponent,
  title: "products details"
},

{
  path: "login",
  component: LoginComponent,
  title: "login"
},

{
  path: "register",
  component: RegisterComponent,
  title: "register page"
},
{
  path: '**',
  component: NotfoundComponent
}];
