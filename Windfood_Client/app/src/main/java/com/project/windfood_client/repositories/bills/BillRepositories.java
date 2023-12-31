package com.project.windfood_client.repositories.bills;

import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.project.windfood_client.models.Bill;
import com.project.windfood_client.network.ApiClient;
import com.project.windfood_client.network.bill.BillApi;
import com.project.windfood_client.network.food.FoodApi;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.BillPagingResponse;
import com.project.windfood_client.responses.FoodPagingResponses;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class BillRepositories {
    private BillApi billApi;

    public BillRepositories() {
        billApi = ApiClient.getRetrofit().create(BillApi.class);
    }
    public LiveData<BillPagingResponse> getBillPaging(PagingRequest pagingRequest, String auth){
        MutableLiveData<BillPagingResponse> data = new MutableLiveData<>();
        billApi.getBillPaging(pagingRequest, auth).enqueue(new Callback<BillPagingResponse>() {
            @Override
            public void onResponse(@NonNull Call<BillPagingResponse> call, @NonNull Response<BillPagingResponse> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<BillPagingResponse> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

    public LiveData<Bill> addOrEditBill(Bill bill, String auth){
        MutableLiveData<Bill> data = new MutableLiveData<>();
        billApi.addOrEditBill(bill, auth).enqueue(new Callback<Bill>() {
            @Override
            public void onResponse(@NonNull Call<Bill> call, @NonNull Response<Bill> response) {
//                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<Bill> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }
}
