package com.project.windfood_client.network.bill;

import com.project.windfood_client.models.Bill;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.BillPagingResponse;
import com.project.windfood_client.responses.FoodPagingResponses;
import com.project.windfood_client.utils.Constants;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface BillApi {
    @Headers({ "Content-Type: application/json;charset=UTF-8"})
    @POST(Constants.BILL_ROUTE + "/paging")
    Call<BillPagingResponse> getBillPaging(@Body PagingRequest pagingRequest, @Header("Authorization") String auth);

    @Headers({ "Content-Type: application/json;charset=UTF-8"})
    @POST(Constants.BILL_ROUTE)
    Call<Bill> addOrEditBill(@Body Bill billRequest, @Header("Authorization") String auth);
}
