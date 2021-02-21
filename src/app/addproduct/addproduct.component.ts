import { Component, OnInit } from '@angular/core';
import {Product2Service} from '../Product/product2.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
product;
  constructor(private serviceProduct: Product2Service) { }

  ngOnInit(): void {

  }
addProduct(f){
    this.serviceProduct.addProduct(f).subscribe(() => {
      alert('succes');
    });


}
}
