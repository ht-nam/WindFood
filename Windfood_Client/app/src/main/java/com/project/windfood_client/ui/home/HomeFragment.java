package com.project.windfood_client.ui.home;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.Gson;
import com.project.windfood_client.R;
import com.project.windfood_client.adapters.ImageSliderAdapter;
import com.project.windfood_client.adapters.ProductListsAdapter;
import com.project.windfood_client.databinding.FragmentHomeBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.repositories.foods.FoodRepositories;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.utils.SharedPrefManager;

import java.util.ArrayList;
import java.util.List;

public class HomeFragment extends Fragment {

    private FragmentHomeBinding binding;
    private FoodRepositories foodRepository;
    private SharedPrefManager sharedPrefManager;
    private ProductListsAdapter productListsAdapter;
    private RecyclerView productRecyclerView;
    private RecyclerView selectedProductRecyclerView;
    private List<Food> productList;
    private EditText editTextSearch;
    private Button buttonSearch;
    private List<Food> selectedProductLists;
    private Gson gson;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        foodRepository = new FoodRepositories();

        binding = FragmentHomeBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        sharedPrefManager = new SharedPrefManager(getActivity().getApplicationContext());
        productList = new ArrayList<>();
        selectedProductLists = new ArrayList<>();
        gson = new Gson();
//        if(!sharedPrefManager.getCartItem().isEmpty()){
//            for(final String cartItem: sharedPrefManager.getCartItem()){
//                selectedProductLists.add(gson.fromJson(cartItem, Food.class));
//            }
//        }
        editTextSearch = binding.searchBar;
        if(!sharedPrefManager.getToken().isEmpty()){
            PagingRequest pagingRequest = new PagingRequest(1, 10000, null);
            doInitialization(pagingRequest);
            editTextSearch.addTextChangedListener(new TextWatcher() {
                @Override
                public void beforeTextChanged(CharSequence s, int start, int count, int after) {
                }

                @Override
                public void onTextChanged(CharSequence s, int start, int before, int count) {

                }

                @Override
                public void afterTextChanged(Editable s) {
                    pagingRequest.setSearch(s.toString());
                    productList.clear();
                    doInitialization(pagingRequest);
                    if (productListsAdapter != null) {
                        productListsAdapter.notifyDataSetChanged();
                    }
                }
            });
        }

        return root;
    }

    private void doInitialization(PagingRequest pagingRequest){
        binding.setIsLoading(true);
        foodRepository.getFoodPaging(pagingRequest,"Bearer " + sharedPrefManager.getToken()).observe(getViewLifecycleOwner(), foodResponses -> {
            String[] urlImage = null;
//                if(foodResponses.size() > 0){
//                    urlImage = new String[foodResponses.size()];
//                }else{
            urlImage = new String[1000];
//                }
            if(foodResponses != null){
                binding.setIsLoading(false);
                for (int i = 0; i < foodResponses.getData().size(); i++) {
                    foodResponses.getData().get(i).setCartQuantity(0);
                    urlImage[i] = foodResponses.getData().get(i).getUrlImg();
                }
                productList.addAll(foodResponses.getData());
                if(urlImage.length > 0){
                    loadImageSlider(urlImage);
                }
                if(productList.size() > 0){
                    updateProductListCartQuantity();
                    productRecyclerView = binding.productRecyclerView;
                    productRecyclerView.setLayoutManager(new GridLayoutManager(getActivity().getApplicationContext(), 2));
                    productListsAdapter = new ProductListsAdapter(productList);
                    productRecyclerView.setAdapter(productListsAdapter);

//                    selectedProductRecyclerView = binding.selectedProductCard;
//                    selectedProductRecyclerView.setLayoutManager(new LinearLayoutManager(getActivity().getApplicationContext()));
//                    imageSliderAdapter = new ImageSliderAdapter(selectedProductLists);
//                    selectedProductRecyclerView.setAdapter(imageSliderAdapter);
                }
            }
        });
    }

    private void loadImageSlider(String[] sliderImages){
//        binding.sliderViewPager.setOffscreenPageLimit(1);
//        binding.sliderViewPager.setAdapter(new ImageSliderAdapter(sliderImages));
//        binding.sliderViewPager.setVisibility(View.VISIBLE);
//        binding.viewFadingEdge.setVisibility(View.VISIBLE);
//        setupSliderIndicators(sliderImages.length);
//        binding.sliderViewPager.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
//            @Override
//            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
//                super.onPageScrolled(position, positionOffset, positionOffsetPixels);
//            }
//
//            @Override
//            public void onPageSelected(int position) {
//                super.onPageSelected(position);
//                setCurrentSliderIndicator(position);
//            }
//
//            @Override
//            public void onPageScrollStateChanged(int state) {
//                super.onPageScrollStateChanged(state);
//            }
//        });
    }

    private void setupSliderIndicators(int count){
        ImageView[] indicators = new ImageView[count];
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
        );
        layoutParams.setMargins(8,  0, 8, 0);
        for (int i = 0; i < indicators.length; i++) {
            indicators[i] = new ImageView(getActivity().getApplicationContext());
            indicators[i].setImageDrawable(ContextCompat.getDrawable(getActivity().getApplicationContext(), R.drawable.background_slider_indicator_inactive));
            indicators[i].setLayoutParams(layoutParams);
            binding.layoutSliderIndicators.addView(indicators[i]);
        }
        binding.layoutSliderIndicators.setVisibility(View.VISIBLE);
        setCurrentSliderIndicator(0);
    }

    private void setCurrentSliderIndicator(int position){
        int childCount = binding.layoutSliderIndicators.getChildCount();
//        Toast.makeText(getApplicationContext(), childCount.toString(), Toast.LENGTH_SHORT).show();
        for (int i = 0; i < childCount; i++) {
            ImageView imageView = (ImageView) binding.layoutSliderIndicators.getChildAt(i);
            if(i == position){
                imageView.setImageDrawable(
                        ContextCompat.getDrawable(getActivity().getApplicationContext(), R.drawable.background_slider_indicator_active)
                );
            }else{
                imageView.setImageDrawable(
                        ContextCompat.getDrawable(getActivity().getApplicationContext(), R.drawable.background_slider_indicator_inactive)
                );
            }
        }
    }

    public void updateProductListCartQuantity() {
        productList.forEach(food -> {
            food.setCartQuantity(0);
            if (Cart.isExistFood(food.getId())) {
                food.setCartQuantity(Cart.getFoodById(food.getId()).getCartQuantity());
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}