package com.project.windfood_client.adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.Gson;
import com.project.windfood_client.MainActivity;
import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ProductCardBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.ui.home.FoodDetailActivity;
import com.project.windfood_client.utils.CustomToast;
import com.project.windfood_client.utils.SharedPrefManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ProductListsAdapter extends RecyclerView.Adapter<ProductListsAdapter.ProductListsViewHolder> {
    private Context context;
    private List<Food> listOfFoods;

    public HashMap<Integer, Integer> quantityMap = new HashMap<>();

    private LayoutInflater layoutInflater;

    private SharedPrefManager sharedPrefManager;
    private Set<Food> addItemToCart;

    private Gson gson;

    public ProductListsAdapter(List<Food> listOfFoods, SharedPrefManager sharedPrefManager) {
        this.listOfFoods = listOfFoods;
        this.addItemToCart = new HashSet<>();
        this.gson = new Gson();
        this.sharedPrefManager = sharedPrefManager;
    }

    @NonNull
    @Override
    public ProductListsViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        if(layoutInflater == null){
            layoutInflater = LayoutInflater.from(parent.getContext());
        }
        ProductCardBinding productCardBinding = DataBindingUtil.inflate(layoutInflater, R.layout.product_card, parent, false);
        return new ProductListsViewHolder(productCardBinding);
    }

    @Override
    public void onBindViewHolder(@NonNull ProductListsViewHolder holder, int position) {
        holder.bindSliderImage(listOfFoods.get(position));
        Food food = listOfFoods.get(position);
        holder.productCardBinding.decreaseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                food.setCartQuantity(food.getCartQuantity() - 1);
                if(food.getCartQuantity() <= 0){
                    food.setCartQuantity(0);
                }
                holder.productCardBinding.quantityTextView.setText(String.valueOf(food.getCartQuantity()));
                if(Cart.cartItems.size() > 0){
                    for (int i = 0; i < Cart.cartItems.size(); i++) {
                        if(Cart.cartItems.get(i).getId() == food.getId()){
                            Food food1 = Cart.cartItems.get(i);
                            food1.setCartQuantity(food.getCartQuantity());
                            Cart.cartItems.set(i, food1);
                        }
//                        CustomToast.makeText(layoutInflater.getContext(), Cart.cartItems.get(i).getCartQuantity().toString(), CustomToast.LENGTH_LONG, CustomToast.SUCCESS, true).show();
                    }
                }
                Cart.cartItems.add(food);
            }
        });

        holder.productCardBinding.increaseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                food.setCartQuantity(food.getCartQuantity() + 1);
                holder.productCardBinding.quantityTextView.setText(String.valueOf(food.getCartQuantity()));
                if(Cart.cartItems.size() > 0){
                    for (int i = 0; i < Cart.cartItems.size(); i++) {
                        if(Cart.cartItems.get(i).getId() == food.getId()){
                            Food food1 = Cart.cartItems.get(i);
                            food1.setCartQuantity(food.getCartQuantity());
                            Cart.cartItems.set(i, food1);
//                            CustomToast.makeText(layoutInflater.getContext(), Cart.cartItems.get(i).getFoodName(), CustomToast.LENGTH_LONG, CustomToast.SUCCESS, true).show();
                        }
                    }
                }
                Cart.cartItems.add(food);
            }
        });
        holder.productCardBinding.productImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                CustomToast.makeText(layoutInflater.getContext(), food.getId().toString(), CustomToast.LENGTH_LONG, CustomToast.SUCCESS, true).show();
                Intent productDetail = new Intent(view.getContext(), FoodDetailActivity.class);
                productDetail.putExtra("foodId", food.getId());

                view.getContext().startActivity(productDetail);
            }
        });
    }

    @Override
    public int getItemCount() {
        return listOfFoods.size();
    }

    static class ProductListsViewHolder extends RecyclerView.ViewHolder{
        private ProductCardBinding productCardBinding;

        public ProductListsViewHolder(ProductCardBinding productCardBinding){
            super(productCardBinding.getRoot());
            this.productCardBinding = productCardBinding;
        }

        public void bindSliderImage(Food food){
            productCardBinding.setFoodResponse(food);
            productCardBinding.executePendingBindings();
        }
    }
}
