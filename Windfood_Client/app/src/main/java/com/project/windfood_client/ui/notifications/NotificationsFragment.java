package com.project.windfood_client.ui.notifications;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.adapters.BillsAdapter;
import com.project.windfood_client.databinding.FragmentNotificationsBinding;
import com.project.windfood_client.repositories.bills.BillRepositories;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.models.Bill;
import com.project.windfood_client.utils.SharedPrefManager;
import com.project.windfood_client.utils.Utils;

import java.util.ArrayList;
import java.util.List;

public class NotificationsFragment extends Fragment {

    private FragmentNotificationsBinding binding;
    private SharedPrefManager sharedPrefManager;
    private BillRepositories billRepository;
    private List<Bill> billList;
    private RecyclerView billRecylerView;

    private BillsAdapter billsAdapter;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        billRepository = new BillRepositories();

        binding = FragmentNotificationsBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        sharedPrefManager = new SharedPrefManager(getActivity().getApplicationContext());
        billList = new ArrayList<>();
        if(!sharedPrefManager.getToken().isEmpty()){
            PagingRequest pagingRequest = new PagingRequest(1, 10000, null);
            doInitialization(pagingRequest);
        }
        return root;
    }

    private void doInitialization(PagingRequest pagingRequest){
        billRepository.getBillPaging(pagingRequest,"Bearer " + sharedPrefManager.getToken()).observe(getViewLifecycleOwner(), billResponses -> {
            if(billResponses != null){
                for (int i = 0; i < billResponses.getData().size(); i++) {
                    billResponses.getData().get(i).setCreateDate(Utils.getFormattedDate(billResponses.getData().get(i).getCreateDate()));
                }
                billList.addAll(billResponses.getData());
                if(billList.size() > 0){
                    billRecylerView = binding.billRecylerView;
                    billRecylerView.setLayoutManager(new LinearLayoutManager(getActivity().getApplicationContext()));
                    billsAdapter = new BillsAdapter(billList);
                    billRecylerView.setAdapter(billsAdapter);
                }
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}