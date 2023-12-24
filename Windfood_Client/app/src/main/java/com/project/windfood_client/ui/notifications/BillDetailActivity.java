package com.project.windfood_client.ui.notifications;

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

import com.project.windfood_client.R;
import com.project.windfood_client.adapters.CartAdapter;
import com.project.windfood_client.databinding.ActivityBillDetailBinding;
import com.project.windfood_client.databinding.ActivityCartBinding;
import com.project.windfood_client.databinding.ActivityFoodDetailBinding;
import com.project.windfood_client.models.Bill;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.models.FoodBill;
import com.project.windfood_client.utils.SharedPrefManager;

import java.util.ArrayList;
import java.util.List;

public class BillDetailActivity extends AppCompatActivity {
    private RecyclerView rvBill;
    private Bill bill;
    private ActivityBillDetailBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityBillDetailBinding.inflate(getLayoutInflater());

        initData();
        setContentView(binding.getRoot());
    }

    void initData() {
        this.bill = (Bill) getIntent().getSerializableExtra("bill");
        // add return button in action bar
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
        ActionBar actionBar = getSupportActionBar();
        actionBar.setTitle("Hoá đơn | " + bill.getCreateDate().toString());
        actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));


        rvBill = binding.rvcart;
        rvBill.setLayoutManager(new LinearLayoutManager(this));
        if (bill.getFoodBillList().size() > 0) {
            List<Food> foodList = new ArrayList<Food>();
            for (FoodBill foodBill: this.bill.getFoodBillList()) {
                foodBill.getFood().setCartQuantity(foodBill.getQuantity());
                foodList.add(foodBill.getFood());
            }
            CartAdapter billAdapter = new CartAdapter(this, new Cart(), foodList);
            rvBill.setAdapter(billAdapter);
        }
        binding.tvPaymentType.setText("PTTT: " + bill.getPaymentMethod());
        binding.tvTotal.setText(""+ bill.getTotalPrice() + "VNĐ");
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}