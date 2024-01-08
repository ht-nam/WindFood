package com.project.windfood_client.ui.cart;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.project.windfood_client.MainActivity;
import com.project.windfood_client.adapters.PaymentProductCardAdapter;
import com.project.windfood_client.databinding.ActivityPaymentBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.utils.SharedPrefManager;
import com.project.windfood_client.utils.Utils;

import java.util.concurrent.atomic.AtomicBoolean;

public class PaymentActivity extends AppCompatActivity {

    private RecyclerView prdCartRecyclerView;
    private ActionBar actionBar;
    private ActivityPaymentBinding binding;
    private SharedPrefManager sharedPrefManager;
    private Utils utils;
    public static boolean isClick = false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_payment);
        binding = ActivityPaymentBinding.inflate(getLayoutInflater());
        initData();
        setContentView(binding.getRoot());
        utils = new Utils();
        sharedPrefManager = new SharedPrefManager(this);
        if(getSupportActionBar() != null){
            actionBar = getSupportActionBar();
            actionBar.setDisplayHomeAsUpEnabled(true);
            actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));
            actionBar.setTitle("Thanh toán");
        }
        binding.payBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                utils.showDialog(PaymentActivity.this, !sharedPrefManager.getToken().isEmpty() ? sharedPrefManager.getToken() : "", PaymentActivity.this);
                Log.println(Log.ASSERT, "isTrue: ", String.valueOf(isClick));
                if(isClick){
                    finish();
                }
            }
        });
    }

    public void initData(){
        prdCartRecyclerView = binding.productRecyclerView;
        prdCartRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        if (Cart.cartItems.size() > 0) {
//            Log.println(Log.WARN, "Current quantity: " + String.valueOf(Cart.cartItems.size()), "");
            PaymentProductCardAdapter paymentProductCardAdapter = new PaymentProductCardAdapter(this, new Cart());
            prdCartRecyclerView.setAdapter(paymentProductCardAdapter);
            binding.tvTotal.setText(""+ Cart.getTotalPrice() + " VNĐ");
        }
    }


    @Override
    public boolean onSupportNavigateUp() {
        finish();
        return true;
    }
}