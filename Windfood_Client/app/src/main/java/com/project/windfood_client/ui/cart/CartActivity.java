package com.project.windfood_client.ui.cart;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import com.project.windfood_client.adapters.CartAdapter;
import com.project.windfood_client.databinding.ActivityCartBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.utils.SharedPrefManager;
import com.project.windfood_client.utils.Utils;

public class CartActivity extends AppCompatActivity {
    private RecyclerView rvCart;
    private ActivityCartBinding binding;
    private Utils utils;
    private SharedPrefManager sharedPrefManager;
    public static boolean isClick = false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityCartBinding.inflate(getLayoutInflater());

        initData();
        utils = new Utils();
        sharedPrefManager = new SharedPrefManager(this);
        setContentView(binding.getRoot());

        binding.payBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                utils.showDialog(CartActivity.this, !sharedPrefManager.getToken().isEmpty() ? sharedPrefManager.getToken() : "", CartActivity.this);
                Log.println(Log.ASSERT, "isTrue: ", String.valueOf(isClick));
                if(isClick){
                    finish();
                }
            }
        });
    }

    void initData() {
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
        ActionBar actionBar = getSupportActionBar();
        actionBar.setTitle("Giỏ hàng");
        actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));


        rvCart = binding.rvcart;
        rvCart.setLayoutManager(new LinearLayoutManager(this));
        if (Cart.cartItems.size() > 0) {
            CartAdapter cartAdapter = new CartAdapter(this, new Cart(), null);
            rvCart.setAdapter(cartAdapter);
        }
        binding.tvTotal.setText(""+ Cart.getTotalPrice() + "VNĐ");
    }

    public void updateData(){
        binding.tvTotal.setText("" + Cart.getTotalPrice() + "VNĐ");
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}