package com.project.windfood_client.network.dashboard;

import com.project.windfood_client.models.Dashboard;
import com.project.windfood_client.requests.DashboardRequest;
import com.project.windfood_client.utils.Constants;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface DashboardApi {

    @Headers({ "Content-Type: application/json;charset=UTF-8"})
    @POST(Constants.BILL_ROUTE + "/dashboard")
    Call<Dashboard[]> getBillDashboard(@Body DashboardRequest pagingRequest, @Header("Authorization") String auth);
}
