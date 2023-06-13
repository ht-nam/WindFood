import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = environment.baseUrl + 'api/foods';

  constructor(private httpClient: HttpClient) { }

  getAllProductsPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<ProductModel[]>(url, object, {responseType: "json" });
  }

  getAllProducts(): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.get<ProductModel[]>(url);
  }
  
  addNewFood(object: ProductModel): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.post<ProductModel[]>(url, object, {responseType: "json"});
  }
}
