import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'https://641028d1864814e5b648f368.mockapi.io/'

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.httpClient.get<ProductModel[]>(this.baseUrl + 'products');
  }
}
