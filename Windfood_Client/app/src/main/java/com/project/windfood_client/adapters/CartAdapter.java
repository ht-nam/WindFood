package com.project.windfood_client.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.CartCardBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.ui.cart.CartActivity;

import java.util.List;

import info.hoang8f.widget.FButton;

public class CartAdapter extends RecyclerView.Adapter<CartAdapter.ViewHolder> {
    private Context context;
    private Cart cart;

    // foodList for billDetail only
    private List<Food> foodList;

    public CartAdapter(Context context, Cart cart, List<Food> foodList) {
        this.context = context;
        this.cart = cart;
        this.foodList = foodList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        CartCardBinding cartCardBinding = DataBindingUtil.inflate(layoutInflater, R.layout.cart_card, parent, false);
        return new ViewHolder(cartCardBinding);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Food food;
        if (foodList == null) {
            food = cart.cartItems.get(position);
            holder.cartCardBinding.cartDecreaseButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (Cart.getFoodById(food.getId()).getCartQuantity() == 1) {
                        Cart.removeItemFromCart(food.getId());
                        notifyDataSetChanged();
                    } else {
                        food.decreaseCartQuantity();
                        holder.cartCardBinding.cartQuantityTextView.setText(String.valueOf(food.getCartQuantity()));
                    }
                    ((CartActivity)context).updateData();

                }
            });
            holder.cartCardBinding.cartIncreaseButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    food.setCartQuantity(food.getCartQuantity() + 1);
                    holder.cartCardBinding.cartQuantityTextView.setText(String.valueOf(food.getCartQuantity()));
                    ((CartActivity)context).updateData();
                }
            });
        } else {
            food = foodList.get(position);
            ((FButton)holder.cartCardBinding.cartDecreaseButton).setVisibility(View.GONE);
            ((FButton)holder.cartCardBinding.cartIncreaseButton).setVisibility(View.GONE);
            ((TextView)holder.cartCardBinding.cartMultiple).setVisibility(View.VISIBLE);
        }
        holder.bindCart(food);
    }

    @Override
    public int getItemCount() {
        if (foodList != null) {
            return  foodList.size();
        }
        return cart.cartItems.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder{
        private CartCardBinding cartCardBinding;

        public ViewHolder(CartCardBinding cartCardBinding){
            super(cartCardBinding.getRoot());
            this.cartCardBinding = cartCardBinding;
        }

        public void bindCart(Food food){
            cartCardBinding.setFood(food);
            cartCardBinding.executePendingBindings();
        }
    }
}


