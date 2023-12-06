package com.project.windfood_client.network.food;

import com.project.windfood_client.models.User;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.FoodPagingResponses;
import com.project.windfood_client.responses.FoodResponses;
import com.project.windfood_client.utils.Constants;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface FoodApi {
    @Headers({ "Content-Type: application/json;charset=UTF-8"})
    @GET( Constants.FOOD_ROUTE )
    Call<List<FoodResponses>> getAllFoods(@Header("Authorization") String auth);

    @Headers({ "Content-Type: application/json;charset=UTF-8"})
    @POST(Constants.FOOD_ROUTE + "/paging")
    Call<FoodPagingResponses> getFoodPaging(@Body PagingRequest pagingRequest, @Header("Authorization") String auth);
}
