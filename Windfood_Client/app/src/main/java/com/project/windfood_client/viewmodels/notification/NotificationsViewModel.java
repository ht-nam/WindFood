package com.project.windfood_client.viewmodels.notification;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.ViewModel;

import com.project.windfood_client.repositories.bills.BillRepositories;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.BillPagingResponse;

public class NotificationsViewModel extends ViewModel {

    private BillRepositories billRepositories;

    public NotificationsViewModel() {
        billRepositories = new BillRepositories();
    }

    public LiveData<BillPagingResponse> getBillPaging(PagingRequest pagingRequest, String auth){
        return billRepositories.getBillPaging(pagingRequest, auth);
    }
}