import { Routes } from '@angular/router';

import { ProductListComponent } from '../components/product-list/product-list.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { CartDetailsComponent } from '../components/cart-details/cart-details.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';


export const routes: Routes = [
    {path: 'checkout', component: CheckoutComponent},
    {path: 'cart-details', component: CartDetailsComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'search/:keyword', component: ProductListComponent},
    {path: 'home', component: HomeComponent},
    {path: 'category/:id', component: ProductListComponent},
    {path: 'category', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]