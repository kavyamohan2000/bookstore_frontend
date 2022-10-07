import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BooksComponent } from './components/books/books.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BookspageComponent } from './pages/bookspage/bookspage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { SearchComponent } from './components/search/search.component';
import { BookbynameComponent } from './components/bookbyname/bookbyname.component';
import { BookbyisbnComponent } from './components/bookbyisbn/bookbyisbn.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    HeaderComponent,
    CategoriesComponent,
    BooksComponent,
    HomepageComponent,
    BookspageComponent,
    SidebarComponent,
    OrderComponent,
    CartComponent,
    WishlistComponent,
    AdminComponent,
    SearchComponent,
    BookbynameComponent,
    BookbyisbnComponent
  
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
