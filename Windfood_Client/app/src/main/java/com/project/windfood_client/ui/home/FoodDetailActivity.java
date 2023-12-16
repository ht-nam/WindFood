package com.project.windfood_client.ui.home;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;

import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ActivityFoodDetailBinding;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.repositories.foods.FoodRepositories;
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
            binding = DataBindingUtil.setContentView(this, R.layout.activity_food_detail);
            foodRepository = new FoodRepositories();
            sharedPrefManager = new SharedPrefManager(getApplicationContext());
            Bundle extras = getIntent().getExtras();
            if (extras != null) {
                selectedFoodId = extras.getInt("foodId");
                String auth = "Bearer " + sharedPrefManager.getToken();
                foodRepository.getById(selectedFoodId,auth).observe(this, foodRes -> {
                    this.food = foodRes;
                    if (this.food != null) {
                        binding.setFood(this.food);
                        bindingAction();
                    }
                });
                // set action bar title
                ActionBar actionBar = getSupportActionBar();
                actionBar.setTitle(selectedFoodId.toString());
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
                Integer currentVal = Integer.parseInt(quantityTextView.getText().toString());
                quantityTextView.setText(String.valueOf(++currentVal));
            }
        });

        decreaseBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Integer currentVal = Integer.parseInt(quantityTextView.getText().toString());
                quantityTextView.setText(String.valueOf(--currentVal));
            }
        });
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}