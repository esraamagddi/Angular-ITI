import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product-service.service';
import { NgFor } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data: any) => {
      this.products = data.products;
    });
  }
  addToCart(product: Product): void {
    // Implement your logic to add the product to the cart here
    console.log('Product added to cart:', product);
  }
}
