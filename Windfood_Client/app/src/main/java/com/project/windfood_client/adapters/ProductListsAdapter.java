package com.project.windfood_client.adapters;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ProductCardBinding;
import com.project.windfood_client.responses.FoodResponses;

import java.util.HashMap;
import java.util.List;

public class ProductListsAdapter extends RecyclerView.Adapter<ProductListsAdapter.ProductListsViewHolder> {
    private List<FoodResponses> listOfFoods;

    public HashMap<Integer, Integer> quantityMap = new HashMap<>();

    private LayoutInflater layoutInflater;
    public ProductListsAdapter(List<FoodResponses> listOfFoods) {
        this.listOfFoods = listOfFoods;
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
        FoodResponses foodResponses = listOfFoods.get(position);
        holder.productCardBinding.quantityTextView.setText(String.valueOf(quantityMap.getOrDefault(foodResponses.getId(), 0)));
    }

    @Override
    public int getItemCount() {
        return listOfFoods.size();
    }

    static class ProductListsViewHolder extends RecyclerView.ViewHolder{
        private ProductCardBinding productCardBinding;
        TextView quantityTextView;
        Button decreaseButton;
        Button increaseButton;
        public ProductListsViewHolder(ProductCardBinding productCardBinding){
            super(productCardBinding.getRoot());
            this.productCardBinding = productCardBinding;
            quantityTextView = itemView.findViewById(R.id.quantity_text_view);
            decreaseButton = itemView.findViewById(R.id.decrease_button);
            increaseButton = itemView.findViewById(R.id.increase_button);

            decreaseButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    int currentQuantity = Integer.parseInt(quantityTextView.getText().toString());
                    if (currentQuantity > 0) {
                        quantityTextView.setText(String.valueOf(currentQuantity - 1));
                    }
                }
            });

            increaseButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    int currentQuantity = Integer.parseInt(quantityTextView.getText().toString());
                    quantityTextView.setText(String.valueOf(currentQuantity + 1));
                }
            });
        }

        public void bindSliderImage(FoodResponses foodResponses){
            productCardBinding.setFoodResponse(foodResponses);
            productCardBinding.executePendingBindings();
        }
    }
}
