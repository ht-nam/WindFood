package com.project.windfood_client.repositories.dashboard;

import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.project.windfood_client.models.Dashboard;
import com.project.windfood_client.network.ApiClient;
import com.project.windfood_client.network.bill.BillApi;
import com.project.windfood_client.network.dashboard.DashboardApi;
import com.project.windfood_client.requests.DashboardRequest;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.BillPagingResponse;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class DashboardRepositories {
    private DashboardApi dashboardApi;

    public DashboardRepositories() {
        dashboardApi = ApiClient.getRetrofit().create(DashboardApi.class);
    }
    public LiveData<Dashboard[]> getBillDashboard(DashboardRequest dashboardRequest, String auth){
        MutableLiveData<Dashboard[]> data = new MutableLiveData<>();
        dashboardApi.getBillDashboard(dashboardRequest, auth).enqueue(new Callback<Dashboard[]>() {
            @Override
            public void onResponse(@NonNull Call<Dashboard[]> call, @NonNull Response<Dashboard[]> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<Dashboard[]> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }
}
