import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [ {
  path:"",
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
  component: ProductDetailComponent,
  title: "products details"
},

{
  path: '**',
  component: NotFoundComponent
}];
