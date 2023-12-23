package com.project.windfood_client.ui.cart;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.TextView;

import com.project.windfood_client.adapters.CartAdapter;
import com.project.windfood_client.databinding.ActivityCartBinding;
import com.project.windfood_client.models.Cart;

public class CartActivity extends AppCompatActivity {
    private TextView tvTotal;
    private RecyclerView rvCart;
    private ActivityCartBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityCartBinding.inflate(getLayoutInflater());
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
        ActionBar actionBar = getSupportActionBar();
        actionBar.setTitle("Giỏ hàng");
        actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));

        setContentView(binding.getRoot());

        tvTotal = binding.tvTotal;
        rvCart = binding.rvcart;
        rvCart.setLayoutManager(new LinearLayoutManager(this));
        if (Cart.cartItems.size() > 0) {
            CartAdapter cartAdapter = new CartAdapter(this, new Cart());
            rvCart.setAdapter(cartAdapter);
        }
        tvTotal.setText(""+ Cart.getTotalPrice() + "VNĐ");
    }

    public void updateData(){
        tvTotal.setText("" + Cart.getTotalPrice() + "VNĐ");
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}