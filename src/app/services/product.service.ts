import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Product} from '../model/product';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // TODO: Populate products from an API and return an observable
    return this.http.get<Product[]>(apiUrl);
  }
}
