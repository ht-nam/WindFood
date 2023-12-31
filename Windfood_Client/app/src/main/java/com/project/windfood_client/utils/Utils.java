package com.project.windfood_client.utils;

import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;

import androidx.lifecycle.LifecycleOwner;

import com.project.windfood_client.models.Bill;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.models.FoodBill;
import com.project.windfood_client.repositories.bills.BillRepositories;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

public class Utils {
    private BillRepositories billRepositories;
    public Utils(){
        billRepositories = new BillRepositories();
    }
    public static String getFormattedDate(String createDate) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date date = sdf.parse(createDate);
            sdf.applyPattern("dd/MM/yyyy");
            return sdf.format(date);
        }catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean showDialog(Context context, String token, LifecycleOwner lifecycleOwner) {
        AtomicBoolean isClick = new AtomicBoolean(false);
        AlertDialog alertDialog = new AlertDialog.Builder(context).create();
        alertDialog.setTitle("Phương thức thanh toán");

//Create LinearLayout
        LinearLayout layout = new LinearLayout(context);
        layout.setPadding(30, 100, 30, 100);
        layout.setOrientation(LinearLayout.HORIZONTAL);
        layout.setHorizontalGravity(1);

//Create Button1
        Button moneyCash = new Button(context);
        moneyCash.setText("Tiền Mặt");
        moneyCash.setBackgroundColor(Color.parseColor("#2980b9"));
        LinearLayout.LayoutParams moneyCashParams = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        );
        moneyCash.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                List<FoodBill> foodBills = new ArrayList<>();
                Bill bill = null;
                if(Cart.cartItems != null){
                    Cart.cartItems.forEach(e -> {
                        foodBills.add(new FoodBill(null, e.getCartQuantity(), null, new Food(e.getId()), null));
                    });
                }
                bill = new Bill(null, (int) Cart.getTotalPrice(), null, "Tiền Mặt", foodBills);
                alertDialog.dismiss();
                billRepositories.addOrEditBill(bill, "Bearer " + token).observe(lifecycleOwner, res -> {
                    if(res != null){
                        CustomToast.makeText(context, "Thanh toán thành công", Toast.LENGTH_LONG, CustomToast.SUCCESS, false).show();
                        Cart.cartItems.clear();
                        isClick.set(true);
                    }
                });
            }
        });
        moneyCash.setTextColor(Color.WHITE);
        moneyCashParams.setMargins(0, 0, 20, 0); //Left, Top, Right, Bottom
        moneyCash.setLayoutParams(moneyCashParams);
        layout.addView(moneyCash);

//Create Button2
        Button qrMoney = new Button(context);
        qrMoney.setText("QR PAY");
        qrMoney.setBackgroundColor(Color.parseColor("#2980b9"));
        qrMoney.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(context,
                        "Your Message", Toast.LENGTH_LONG).show();
                alertDialog.dismiss();
            }
        });
        layout.addView(qrMoney);
        qrMoney.setTextColor(Color.WHITE);
        alertDialog.setView(layout);
        alertDialog.show();
        return isClick.get();
    }

}
