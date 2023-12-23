package com.project.windfood_client.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.CartCardBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.ui.cart.CartActivity;

public class CartAdapter extends RecyclerView.Adapter<CartAdapter.ViewHolder> {
    private Context context;
    private Cart cart;

    public CartAdapter(Context context, Cart cart) {
        this.context = context;
        this.cart = cart;
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
        Food food = cart.cartItems.get(position);
        holder.bindCart(food);
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
    }

    @Override
    public int getItemCount() {
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


