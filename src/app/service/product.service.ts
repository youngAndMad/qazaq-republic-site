import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../domain/entity/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>('assets/in-memory/products.json')
  }
  
}
