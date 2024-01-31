import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private fetch: HttpClient) {
  }

  getProductList(): Observable<Product> {
    return this.fetch.get<Product>('https://dummyjson.com/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.fetch.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}



