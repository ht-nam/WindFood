package com.project.windfood_client.repositories.foods;

import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.project.windfood_client.models.User;
import com.project.windfood_client.network.ApiClient;
import com.project.windfood_client.network.auth.AuthApiService;
import com.project.windfood_client.network.food.FoodApi;
import com.project.windfood_client.responses.FoodResponses;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FoodRepositories {
    private FoodApi foodApi;

    public FoodRepositories() {
        foodApi = ApiClient.getRetrofit().create(FoodApi.class);
    }

    public LiveData<List<FoodResponses>> getAllFoods(String auth){
        MutableLiveData<List<FoodResponses>> data = new MutableLiveData<>();
        foodApi.getAllFoods(auth).enqueue(new Callback<List<FoodResponses>>() {
            @Override
            public void onResponse(@NonNull Call<List<FoodResponses>> call, @NonNull Response<List<FoodResponses>> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<List<FoodResponses>> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

}
