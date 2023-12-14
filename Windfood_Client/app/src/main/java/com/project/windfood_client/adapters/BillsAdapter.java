package com.project.windfood_client.adapters;

import android.view.LayoutInflater;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.BillCardBinding;
import com.project.windfood_client.models.Bill;

import java.util.List;

public class BillsAdapter extends RecyclerView.Adapter<BillsAdapter.BillsViewHolder>{
    private List<Bill> listBillRespons;

    private LayoutInflater layoutInflater;
    public BillsAdapter(List<Bill> listBillRespons){
        this.listBillRespons = listBillRespons;
    }

    @NonNull
    @Override
    public BillsViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        if(layoutInflater == null){
            layoutInflater = LayoutInflater.from(parent.getContext());
        }
        BillCardBinding billCardBinding = DataBindingUtil.inflate(layoutInflater, R.layout.bill_card, parent, false);
        return new BillsAdapter.BillsViewHolder(billCardBinding);
    }

    @Override
    public void onBindViewHolder(@NonNull BillsViewHolder holder, int position) {
        holder.bindSliderImage(listBillRespons.get(position));
    }

    @Override
    public int getItemCount() {
        return listBillRespons.size();
    }

    static class BillsViewHolder extends RecyclerView.ViewHolder{

        private BillCardBinding billCardBinding;
        public BillsViewHolder(BillCardBinding billCardBinding) {
            super(billCardBinding.getRoot());
            this.billCardBinding = billCardBinding;
        }
        public void bindSliderImage(Bill bill){
            billCardBinding.setBillResponse(bill);
            billCardBinding.executePendingBindings();
        }
    }
}
