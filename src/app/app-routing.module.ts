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
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guard/admin.guard';
import { SearchComponent } from './components/search/search.component';
import { BookbynameComponent } from './components/bookbyname/bookbyname.component';

const routes:Routes=[
    {path:'home',component:HomepageComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
    {path:'wishlist',component:WishlistComponent,canActivate:[AuthGuard]},
    {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
    {path:'books/:catid',component:BooksComponent,canActivate:[AuthGuard]},
    {path:'admin',component:AdminComponent,canActivate:[AdminGuard]},
    {path:'search',component:SearchComponent,canActivate:[AuthGuard]},
    {path:'bookbyname/:title',component:BookbynameComponent,canActivate:[AuthGuard]}

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}