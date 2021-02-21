import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { ProductsComponent } from './products/products.component';
import { FormeComponent } from './forme/forme.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListProductComponent } from './list-product/list-product.component';
import {HttpClientModule} from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListeComponent } from './liste/liste.component';



const ROUTES: Routes = [
  //{path: 'products' , component: ProductsComponent},
  //{path: 'c1' , component: C1Component},
  //{path: 'form' , component: FormeComponent},
  //{path: 'products/:id', component: DetailProductComponent},
  //{ path: '',   redirectTo: '/products', pathMatch: 'full' }, // redirect to `form`
  //{path: '**' , component: NotFoundComponent}, // Wildcard route for a 404 page
  {path: 'addproduct1', component: AddproductComponent},
  {path: 'get', component: ListeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    ProductsComponent,
    FormeComponent,
    NotFoundComponent,
    DetailProductComponent,
    TodoListComponent,
    ListProductComponent,
    AddproductComponent,
    ListeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
