import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = environment.baseUrl + 'api/foods';
  private categoryUrl = environment.baseUrl + 'api/categories';

  constructor(private httpClient: HttpClient) { }

  getAllProductsPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<ProductModel[]>(url, object, {responseType: "json" });
  }

  getAllProducts(): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.get<ProductModel[]>(url);
  }
  
  addOrEditFood(object: ProductModel): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.post<ProductModel[]>(url, object, {responseType: "json"});
  }

  deleteFood(id: string):Observable<any>{
    let url = this.baseUrl + `/${id}`;
    return this.httpClient.delete<ProductModel>(url);
  }

  getAllCategories(): Observable<any>{
    let url = this.categoryUrl;
    return this.httpClient.get<Category[]>(url);
  }

  getByCategory(): Observable<any>{
    let url = this.baseUrl + '/by-category';
    return this.httpClient.get<any>(url);
  }
}
