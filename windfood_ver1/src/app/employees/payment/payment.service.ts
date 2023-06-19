import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/models/bill.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = environment.baseUrl + 'api/bills';

  constructor(private httpClient: HttpClient) { }

  
  getAllBillPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<Bill[]>(url, object, {responseType: "json" });
  }

  getAllBills(): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.get<Bill[]>(url);
  }

  addOrEditBill(object: Object): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.post<any>(url, object, {responseType: "json"});
  }

  deleteBill(id: string):Observable<any>{
    let url = this.baseUrl + `/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
