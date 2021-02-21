import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
getProduct(){

    return this.http.get(this.url);

}
  postProduct(p: Product){
    return  this.http.post(this.url, p);
  }
}
