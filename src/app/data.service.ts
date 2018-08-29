
import { Injectable } from '@angular/core';
import { CATEGORIES, PRODUCTS } from './mock-data';
import { Product } from './shared/product.model';
import { Observable, of } from 'rxjs';
import { Category } from './shared/category.model';

@Injectable()
export class DataService {
  private products: Product[];

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getProducts(): Observable<Product[]> {
    if (!this.products) {
      this.products = PRODUCTS.map(rawP => new Product(rawP));
    }

    return of(this.products);
  }
}
