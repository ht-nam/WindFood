package com.project.windfood_client.repositories.auth;
import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.project.windfood_client.models.User;
import com.project.windfood_client.network.ApiClient;
import com.project.windfood_client.network.auth.AuthApiService;

import java.util.HashMap;
import java.util.Map;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AuthRepositories {
    private AuthApiService authApiService;

    public AuthRepositories() {
        authApiService = ApiClient.getRetrofit().create(AuthApiService.class);
    }

    public LiveData<String> loginUser(User user){
        MutableLiveData<String> data = new MutableLiveData<>();
        authApiService.loginUser(user).enqueue(new Callback<String>() {
            @Override
            public void onResponse(@NonNull Call<String> call, @NonNull Response<String> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<String> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

    public LiveData<User> getCurrentUser(String auth){
        MutableLiveData<User> data = new MutableLiveData<>();
        authApiService.getCurrentUser(auth).enqueue(new Callback<User>() {
            @Override
            public void onResponse(@NonNull Call<User> call, @NonNull Response<User> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<User> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

    public LiveData<User> changeInfoUser(String auth, User user){
        MutableLiveData<User> data = new MutableLiveData<>();
        authApiService.changeInfoUser(auth, user).enqueue(new Callback<User>() {
            @Override
            public void onResponse(@NonNull Call<User> call, @NonNull Response<User> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<User> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue(null);
            }
        });
        return data;
    }

    public LiveData<String> changePassword(String auth, String oldPassword, String newPassword){
        MutableLiveData<String> data = new MutableLiveData<>();
        Map<String, String> body  = new HashMap<String, String>() {{
            put("oldPassword", oldPassword);
            put("newPassword", newPassword);
        }};
        authApiService.changePassword(auth, body).enqueue(new Callback<String>() {
            @Override
            public void onResponse(@NonNull Call<String> call, @NonNull Response<String> response) {
                System.out.println(response.body());
                data.setValue(response.body());
            }

            @Override
            public void onFailure(@NonNull Call<String> call,@NonNull Throwable t) {
                System.out.println("Throwable: " + t.getLocalizedMessage());
                data.setValue("System error");
            }
        });
        return data;
    }
}
