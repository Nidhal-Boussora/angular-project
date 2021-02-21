import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../Model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
listProduct: Product[];
product: Product;
  constructor(private  productService: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productService.getProduct().subscribe(
      (data: Product[]) => this.listProduct = data);

  }
  save(){
    this.productService.postProduct(this.product).subscribe(
      () => this.listProduct = [this.product, ...this.listProduct]
    );
  }

}
