import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Person } from 'src/app/models/person.model';
import { ProductModel } from 'src/app/models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = environment.baseUrl + 'api/categories';

  constructor(private httpClient: HttpClient) { }

  getAllCategoriesPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<Category[]>(url, object, {responseType: 'json'});
  }

  getAllCategories(): Observable<any>{
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  addOrUpdateCategory(object: Object) : Observable<any>{
    return this.httpClient.post<Category>(this.baseUrl, object, {responseType: 'json'});
  }

  deleteCategory(id?: string | number) : Observable<any>{
    let url = this.baseUrl + `/${id}`;
    return this.httpClient.delete<Category>(url)
  }
}
