package com.project.windfood_client.adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.Gson;
import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ProductCardBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.ui.home.FoodDetailActivity;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ProductListsAdapter extends RecyclerView.Adapter<ProductListsAdapter.ProductListsViewHolder> {
    private Context context;
    private List<Food> listOfFoods;

    public HashMap<Integer, Integer> quantityMap = new HashMap<>();

    private LayoutInflater layoutInflater;

    private Set<Food> addItemToCart;

    public ProductListsAdapter(List<Food> listOfFoods) {
        this.listOfFoods = listOfFoods;
        this.addItemToCart = new HashSet<>();
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
        Food food = listOfFoods.get(position);
        holder.bindSliderImage(food);
        holder.productCardBinding.decreaseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                food.decreaseCartQuantity();
                if(food.getCartQuantity() < 0){
                    food.setCartQuantity(0);
                }
                holder.productCardBinding.quantityTextView.setText(String.valueOf(food.getCartQuantity()));
                if (Cart.isExistFood(food.getId())) {
                    if (Cart.getFoodById(food.getId()).getCartQuantity() == 1) {
                        Cart.removeItemFromCart(food.getId());
                    } else {
                        Cart.getFoodById(food.getId()).decreaseCartQuantity();
                    }
                }
            }
        });

        holder.productCardBinding.increaseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                food.increaseCartQuantity();
                holder.productCardBinding.quantityTextView.setText(String.valueOf(food.getCartQuantity()));
                if (Cart.isExistFood(food.getId())) {
                    Cart.getFoodById(food.getId()).increaseCartQuantity();
                } else {
                    Food cartFood = food.getCopy();
                    Cart.cartItems.add(cartFood);
                }
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
