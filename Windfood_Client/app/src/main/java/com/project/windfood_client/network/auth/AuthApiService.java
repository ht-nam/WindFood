package com.project.windfood_client.network.auth;

import com.project.windfood_client.models.User;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import com.project.windfood_client.utils.Constants;

import java.util.Map;

public interface AuthApiService {

    @POST( Constants.PERSON_ROUTE + "/login")
    Call<String> loginUser(@Body User user);

    @GET(Constants.PERSON_ROUTE + "/get-current-user")
    Call<User> getCurrentUser(@Header("Authorization") String auth);

    @POST(Constants.PERSON_ROUTE + "/")
    Call<User> changeInfoUser(@Header("Authorization") String auth, @Body User user);

    @POST(Constants.PERSON_ROUTE + "/change-password")
    Call<String> changePassword(@Header("Authorization") String auth, @Body Map<String, String> body);
}
