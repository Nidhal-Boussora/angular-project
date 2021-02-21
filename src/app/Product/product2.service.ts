import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Product2Service {
url = 'http://localhost:3000/products';
  constructor(private Http: HttpClient ) {}

  addProduct(produit){
    return  this.Http.post(this.url, produit);
  }
  getProduct(){
    return this.Http.get((this.url));
  }
  deleteProduct(id){
    return this.Http.get(this.url, id);
  }
}
