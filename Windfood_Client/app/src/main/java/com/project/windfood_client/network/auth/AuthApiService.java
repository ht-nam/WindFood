package com.project.windfood_client.network.auth;

import com.project.windfood_client.models.User;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;
import com.project.windfood_client.utils.Constants;

public interface AuthApiService {

    @POST( Constants.PERSON_ROUTE + "/login")
    Call<String> loginUser(@Body User user);
}
