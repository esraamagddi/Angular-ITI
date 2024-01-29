import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
// import * as Products from '../../assets/products.json';
import  Products from '../../assets/products.json';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = Products.find((product: Product) => product.id === productId);
  }

}
