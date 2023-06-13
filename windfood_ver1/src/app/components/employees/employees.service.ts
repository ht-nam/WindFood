import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { ProductModel } from 'src/app/models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl = environment.baseUrl + 'api/persons';

  constructor(private httpClient: HttpClient) { }

  getAllEmployeesPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<Person[]>(url, object, {responseType: "json" });
  }

  getAllEmployees(): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.get<Person[]>(url);
  }
  
  addOrEditEmployees(object: Person): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.post<Person[]>(url, object, {responseType: "json"});
  }

  deleteEmployee(id: string):Observable<any>{
    let url = this.baseUrl + `/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
