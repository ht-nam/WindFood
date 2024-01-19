package com.project.windfood_client.utils;

import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Toast;

import androidx.lifecycle.LifecycleOwner;

import com.project.windfood_client.MainActivity;
import com.project.windfood_client.R;
import com.project.windfood_client.models.Bill;
import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.models.FoodBill;
import com.project.windfood_client.repositories.bills.BillRepositories;
import com.project.windfood_client.ui.cart.PaymentActivity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.atomic.AtomicBoolean;

public class Utils {
    private BillRepositories billRepositories;
    private Timer timer;
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

    public void showDialog(Context context, String token, LifecycleOwner lifecycleOwner) {
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
                    }
                });
                PaymentActivity.isClick = true;
                context.startActivity(new Intent(context, MainActivity.class));
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
                alertDialog.dismiss();
                AlertDialog.Builder builder = new AlertDialog.Builder(context).
                        setView(R.layout.qr_image);

                AlertDialog dialog = builder.create();
                dialog.show();

                // add a click listener to a button in the custom view
//                ImageView imageView = dialog.findViewById(R.id.dialog_imageview);
//                imageView.setOnClickListener(new View.OnClickListener() {
//                    @Override
//                    public void onClick(View v) {
//                        dialog.dismiss(); // dismiss the dialog
//                    }
//                });
                timer = new Timer();
                TimerTask task = new TimerTask() {
                    @Override
                    public void run() {
                        List<FoodBill> foodBills = new ArrayList<>();
                        Bill bill = null;
                        if(Cart.cartItems != null){
                            Cart.cartItems.forEach(e -> {
                                foodBills.add(new FoodBill(null, e.getCartQuantity(), null, new Food(e.getId()), null));
                            });
                        }
                        bill = new Bill(null, (int) Cart.getTotalPrice(), null, "qr", foodBills);
                        billRepositories.addOrEditBill(bill, "Bearer " + token).observe(lifecycleOwner, res -> {
                            if(res != null){
                                Cart.cartItems.clear();
                                CustomToast.makeText(context, "Thanh toán thành công", Toast.LENGTH_LONG, CustomToast.SUCCESS, false).show();
                            }
                        });
                        dialog.dismiss();
                        context.startActivity(new Intent(context, MainActivity.class));
                    }
                };
                timer.schedule(task, 10000);
            }
        });
        layout.addView(qrMoney);
        qrMoney.setTextColor(Color.WHITE);
        alertDialog.setView(layout);
        alertDialog.show();
//        Log.println(Log.ASSERT, "isTrueFunction: ", String.valueOf(PaymentActivity.isClick));
    }

}
