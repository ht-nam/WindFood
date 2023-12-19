package com.project.windfood_client.repositories.foods;

import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.project.windfood_client.network.ApiClient;
import com.project.windfood_client.network.food.FoodApi;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.responses.FoodPagingResponses;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FoodRepositories {
    private FoodApi foodApi;

    public FoodRepositories() {
        foodApi = ApiClient.getRetrofit().create(FoodApi.class);
    }

    public LiveData<List<Food>> getAllFoods(String auth){
        MutableLiveData<List<Food>> data = new MutableLiveData<>();
        foodApi.getAllFoods(auth).enqueue(new Callback<List<Food>>() {
            @Override
            public void onResponse(@NonNull Call<List<Food>> call, @NonNull Response<List<Food>> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<List<Food>> call, @NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

    public LiveData<FoodPagingResponses> getFoodPaging(PagingRequest pagingRequest, String auth){
        MutableLiveData<FoodPagingResponses> data = new MutableLiveData<>();
        foodApi.getFoodPaging(pagingRequest, auth).enqueue(new Callback<FoodPagingResponses>() {
            @Override
            public void onResponse(@NonNull Call<FoodPagingResponses> call, @NonNull Response<FoodPagingResponses> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<FoodPagingResponses> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

    public LiveData<Food> getById(int id, String auth){
        MutableLiveData<Food> data = new MutableLiveData<>();
        foodApi.getFoodById(id, auth).enqueue(new Callback<Food>() {
            @Override
            public void onResponse(Call<Food> call, Response<Food> response) {
                data.setValue(response.body());
            }
            @Override
            public void onFailure(@NonNull Call<Food> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }
}
