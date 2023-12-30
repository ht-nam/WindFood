package com.project.windfood_client.ui.cart;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.DialogInterface;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.project.windfood_client.R;
import com.project.windfood_client.adapters.CartAdapter;
import com.project.windfood_client.adapters.PaymentProductCardAdapter;
import com.project.windfood_client.databinding.ActivityPaymentBinding;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.utils.Utils;

import java.util.concurrent.Callable;

import frenchtoast.FrenchToast;
import frenchtoast.Mixture;
import info.hoang8f.widget.FButton;

public class PaymentActivity extends AppCompatActivity {

    private RecyclerView prdCartRecyclerView;
    private ActionBar actionBar;
    private ActivityPaymentBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_payment);
        binding = ActivityPaymentBinding.inflate(getLayoutInflater());
        initData();
        setContentView(binding.getRoot());
        if(getSupportActionBar() != null){
            actionBar = getSupportActionBar();
            actionBar.setDisplayHomeAsUpEnabled(true);
            actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));
            actionBar.setTitle("Thanh toán");
        }
        binding.payBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Utils.showDialog(PaymentActivity.this);
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