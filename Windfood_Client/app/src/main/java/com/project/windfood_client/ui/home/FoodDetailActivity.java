package com.project.windfood_client.ui.home;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ActivityFoodDetailBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.repositories.foods.FoodRepositories;
import com.project.windfood_client.ui.cart.CartActivity;
import com.project.windfood_client.utils.SharedPrefManager;

public class FoodDetailActivity extends AppCompatActivity {
    private Integer selectedFoodId;

    private SharedPrefManager sharedPrefManager;

    private Food food;
    private FoodRepositories foodRepository;

    private ActivityFoodDetailBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // add return button in action bar
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
        setContentView(R.layout.activity_food_detail);
        initData();
    }

    private void initData(){
        try {
            ActionBar actionBar = getSupportActionBar();
            actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));

            binding = DataBindingUtil.setContentView(this, R.layout.activity_food_detail);
            foodRepository = new FoodRepositories();
            sharedPrefManager = new SharedPrefManager(getApplicationContext());
            Bundle extras = getIntent().getExtras();
            if (extras != null) {
                selectedFoodId = extras.getInt("foodId");
                String auth = "Bearer " + sharedPrefManager.getToken();
                foodRepository.getById(selectedFoodId,auth).observe(this, foodRes -> {
                    this.food = foodRes;
                    if (Cart.isExistFood(this.food.getId())) {
                        this.food.setCartQuantity(Cart.getFoodById(this.food.getId()).getCartQuantity());
                    }
                    if (this.food != null) {
                        actionBar.setTitle(this.food.getFoodName());
                        binding.setFood(this.food);
                        bindingAction();
                    }
                });

            } else {
                throw new Exception();
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            Toast.makeText(this, "Can not get product information.", Toast.LENGTH_SHORT).show();
            finish();
        }
    }

    private void bindingAction() {
        Button increaseBtn = findViewById(R.id.food_increase_button);
        Button decreaseBtn = findViewById(R.id.food_decrease_button);
        TextView quantityTextView = findViewById(R.id.food_quantity_text_view);

        quantityTextView.setText("0");
        increaseBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                food.increaseCartQuantity();
                quantityTextView.setText(String.valueOf(food.getCartQuantity()));
                if (Cart.isExistFood(food.getId())) {
                    Cart.getFoodById(food.getId()).increaseCartQuantity();
                } else {
                    Food cartFood = food.getCopy();
                    Cart.cartItems.add(cartFood);
                }
            }
        });

        decreaseBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                food.decreaseCartQuantity();
                if(food.getCartQuantity() < 0){
                    food.setCartQuantity(0);
                }
                quantityTextView.setText(String.valueOf(food.getCartQuantity()));
                if (Cart.isExistFood(food.getId())) {
                    if (Cart.getFoodById(food.getId()).getCartQuantity() == 1) {
                        Cart.removeItemFromCart(food.getId());
                    } else {
                        Cart.getFoodById(food.getId()).decreaseCartQuantity();
                    }
                }
            }
        });
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
        } else if(item.getItemId() == R.id.action_item_cart){
            Intent cart = new Intent(this, CartActivity.class);
            startActivity(cart);
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        if(!sharedPrefManager.getToken().isEmpty()){
            MenuInflater inflater = getMenuInflater();
            inflater.inflate(R.menu.shopping_cart_menu, menu);
        }
        return super.onCreateOptionsMenu(menu);
    }
}