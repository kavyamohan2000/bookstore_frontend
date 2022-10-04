import {NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthGuard } from './guard/auth.guard';

const routes:Routes=[
    {path:'home',component:HomepageComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
    {path:'wishlist',component:WishlistComponent,canActivate:[AuthGuard]},
    {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
    {path:'books/:catid',component:BooksComponent,canActivate:[AuthGuard]}

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}