package com.project.windfood_client.utils;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Color;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.Callable;

public class Utils {
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

    public static void showDialog(Context context) {
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
                CustomToast.makeText(context, "HAHAHA", Toast.LENGTH_LONG).show();
                alertDialog.dismiss();
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
    }

}
