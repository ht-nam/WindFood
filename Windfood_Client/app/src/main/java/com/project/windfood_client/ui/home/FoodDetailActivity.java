package com.project.windfood_client.ui.home;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.MenuItem;
import android.widget.Toast;

import com.project.windfood_client.R;

public class FoodDetailActivity extends AppCompatActivity {
    private Integer selectedFoodId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
        setContentView(R.layout.activity_food_detail);


        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            selectedFoodId = extras.getInt("foodId");
            ActionBar actionBar = getSupportActionBar();
            actionBar.setTitle(selectedFoodId.toString());
        } else {
            Toast.makeText(this, "Can not get product information.", Toast.LENGTH_SHORT).show();
            finish();
        }
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}