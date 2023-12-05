package com.project.windfood_client.viewmodels.home;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.project.windfood_client.repositories.foods.FoodRepositories;
import com.project.windfood_client.responses.FoodResponses;

import java.util.List;

public class HomeViewModel extends ViewModel {

    private FoodRepositories foodRepositories;

    public HomeViewModel() {
        foodRepositories = new FoodRepositories();
    }

    public LiveData<List<FoodResponses>> getAllFoods(String auth){
        return foodRepositories.getAllFoods(auth);
    }
}