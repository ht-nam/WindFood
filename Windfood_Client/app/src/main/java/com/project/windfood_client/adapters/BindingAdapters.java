package com.project.windfood_client.adapters;

import android.widget.TextView;

import androidx.databinding.BindingAdapter;

import android.text.format.DateFormat;
import java.util.Date;

public class BindingAdapters {
    @BindingAdapter("android:text")
    public static void setText(TextView view, Date date) {
        if (date != null) {
            view.setText(DateFormat.format("dd/MM/yyyy", date));
        } else {
            view.setText("");
        }
    }
}
