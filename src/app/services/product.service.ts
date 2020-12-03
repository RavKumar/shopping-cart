import { Injectable } from '@angular/core';
import { Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "Product 1", "This is the product 1 discription. The product is really kool.", 100),
    new Product(2, "Product 2", "This is the product 2 discription. The product is really kool.", 150),
    new Product(3, "Product 3", "This is the product 3 discription. The product is really kool.", 250),
    new Product(4, "Product 4", "This is the product 4 discription. The product is really kool.", 350),
    new Product(5, "Product 5", "This is the product 5 discription. The product is really kool.", 450),
    new Product(6, "Product 6", "This is the product 6 discription. The product is really kool.", 550),
    new Product(7, "Product 7", "This is the product 7 discription. The product is really kool.", 650),
  ]

  constructor() { }

  getProducts(): Product[] {
    // TODO: Populate products from an API and return an observable
    return this.products;
  }
}
