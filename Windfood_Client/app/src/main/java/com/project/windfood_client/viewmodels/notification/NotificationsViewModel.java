package com.project.windfood_client.viewmodels.notification;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.project.windfood_client.repositories.bills.BillRepositories;
import com.project.windfood_client.repositories.foods.FoodRepositories;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.BillPagingResponse;
import com.project.windfood_client.responses.FoodPagingResponses;
import com.project.windfood_client.responses.FoodResponses;

import java.util.List;

public class NotificationsViewModel extends ViewModel {

    private BillRepositories billRepositories;

    public NotificationsViewModel() {
        billRepositories = new BillRepositories();
    }

    public LiveData<BillPagingResponse> getBillPaging(PagingRequest pagingRequest, String auth){
        return billRepositories.getBillPaging(pagingRequest, auth);
    }
}