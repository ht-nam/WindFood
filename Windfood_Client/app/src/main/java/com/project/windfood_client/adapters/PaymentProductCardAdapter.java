package com.project.windfood_client.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.CartCardBinding;
import com.project.windfood_client.databinding.PaymentCardBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;

import java.util.List;

public class PaymentProductCardAdapter extends RecyclerView.Adapter<PaymentProductCardAdapter.ViewHolder> {

    private Context context;
    private Cart cart;

    public PaymentProductCardAdapter(Context context, Cart cart){
        this.context = context;
        this.cart =  cart;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        PaymentCardBinding paymentCardBinding = DataBindingUtil.inflate(layoutInflater, R.layout.payment_card, parent, false);
        return new PaymentProductCardAdapter.ViewHolder(paymentCardBinding);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
//        Food food;
//        food = cart.;
        holder.bindCard(cart.cartItems.get(position));
    }

    @Override
    public int getItemCount() {
        return cart.cartItems.size();
    }


    public static class ViewHolder extends RecyclerView.ViewHolder{
        private PaymentCardBinding paymentCardBinding;

        public ViewHolder(PaymentCardBinding paymentCardBinding){
            super(paymentCardBinding.getRoot());
            this.paymentCardBinding = paymentCardBinding;
        }

        public void bindCard(Food food){
            paymentCardBinding.setFood(food);
            paymentCardBinding.executePendingBindings();
        }
    }
}
