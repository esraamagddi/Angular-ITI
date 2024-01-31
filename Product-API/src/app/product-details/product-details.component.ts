import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/product-service.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    const productId = productIdParam ? +productIdParam : null;
    if (productId !== null) {
      this.productService.getProduct(productId).subscribe((data: any) => {
        this.product = data;
      });
    }
  }


}
