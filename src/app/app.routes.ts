import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'edit-product', component: EditProductComponent},
];
