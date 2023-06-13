import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/products.model';
import { Provider } from 'src/app/models/provider.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private baseUrl = environment.baseUrl + 'api/providers';

  constructor(private httpClient: HttpClient) { }

  getAllSuppliersPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<Provider[]>(url, object, {responseType: "json" });
  }

  getAllSuppliers(): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.get<Provider[]>(url);
  }
  
  addOrEditSupplier(object: Provider): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.post<Provider[]>(url, object, {responseType: "json"});
  }

  deleteSupplier(id: string):Observable<any>{
    let url = this.baseUrl + `/${id}`;
    return this.httpClient.delete<Provider>(url);
  }
}
