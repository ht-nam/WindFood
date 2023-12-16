package com.project.windfood_client.adapters;

import android.view.LayoutInflater;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.RecyclerView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ItemContainerSliderImageBinding;
import com.project.windfood_client.models.Food;

import java.util.ArrayList;
import java.util.List;

public class FoodSliderAdapter extends RecyclerView.Adapter<FoodSliderAdapter.ImageSliderViewHolder>{

    private List<Food> sliderImages;
    private LayoutInflater layoutInflater;

    public FoodSliderAdapter(String[] sliderImages) {
        this.sliderImages = new ArrayList<>();
    }

    @NonNull
    @Override
    public ImageSliderViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        if(layoutInflater == null){
            layoutInflater = LayoutInflater.from(parent.getContext());
        }
        ItemContainerSliderImageBinding sliderImageBinding = DataBindingUtil.inflate(layoutInflater, R.layout.item_container_slider_image, parent, false);
        return new ImageSliderViewHolder(sliderImageBinding);
    }

    @Override
    public void onBindViewHolder(@NonNull ImageSliderViewHolder holder, int position) {
        holder.bindSliderImage(sliderImages.get(position));
    }

    @Override
    public int getItemCount() {
        return sliderImages.size();
    }

    static class ImageSliderViewHolder extends RecyclerView.ViewHolder{
        private ItemContainerSliderImageBinding itemContainerSliderImageBinding;
        public ImageSliderViewHolder(ItemContainerSliderImageBinding itemContainerSliderImageBinding){
            super(itemContainerSliderImageBinding.getRoot());
            this.itemContainerSliderImageBinding = itemContainerSliderImageBinding;
        }

        public void bindSliderImage(Food food){
            itemContainerSliderImageBinding.setFoodResponse(food);
            itemContainerSliderImageBinding.executePendingBindings();
        }
    }
}
