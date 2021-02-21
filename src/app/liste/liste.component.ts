import { Component, OnInit } from '@angular/core';
import {Product2Service} from '../Product/product2.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  product;
  constructor(private serviceProduct: Product2Service) { }

  ngOnInit(): void {
    this.serviceProduct.getProduct().subscribe(( liste) => {
      this.product = liste;
    });
  }

}



