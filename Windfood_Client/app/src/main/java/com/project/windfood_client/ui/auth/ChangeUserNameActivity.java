package com.project.windfood_client.ui.auth;

import android.app.DatePickerDialog;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.widget.DatePicker;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

import com.google.protobuf.StringValue;
import com.project.windfood_client.MainActivity;
import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ActivityChangeUserNameBinding;
import com.project.windfood_client.models.User;
import com.project.windfood_client.repositories.auth.AuthRepositories;

import com.project.windfood_client.utils.CustomToast;
import com.project.windfood_client.utils.SharedPrefManager;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class ChangeUserNameActivity extends AppCompatActivity {

    private AuthRepositories authRepositories;
    private ActivityChangeUserNameBinding binding;
    private SharedPrefManager sharedPrefManager;
    private User user;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityChangeUserNameBinding.inflate(getLayoutInflater());
        doInitialization();
        initData();
        setContentView(binding.getRoot());
    }

    void initData() {
        String auth = "Bearer " + sharedPrefManager.getToken();
        authRepositories.getCurrentUser(auth).observe(this, response -> {
            this.user = response;
            this.user.setPersonId(response.getPersonId());
            this.user.setName(response.getName());
            this.user.setBirthday(response.getBirthday());
            this.user.setPhone_number(response.getPhone_number());
            binding.setUser(this.user);
        });
        binding.userDob.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Calendar c = Calendar.getInstance();

                int year = c.get(Calendar.YEAR);
                int month = c.get(Calendar.MONTH);
                int day = c.get(Calendar.DAY_OF_MONTH);

                DatePickerDialog datePickerDialog = new DatePickerDialog(
                        ChangeUserNameActivity.this,
                        new DatePickerDialog.OnDateSetListener() {
                            @Override
                            public void onDateSet(DatePicker view, int year,
                                                  int monthOfYear, int dayOfMonth) {
                                // on below line we are setting date to our edit text.
                                binding.userDob.setText(dayOfMonth + "/" + (monthOfYear + 1) + "/" + year);

                            }
                        },
                        year, month, day);
                datePickerDialog.show();
            }
        });
        binding.btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (String.valueOf(binding.userName.getText()).isEmpty() || String.valueOf(binding.userDob.getText()).isEmpty() || String.valueOf(binding.userNumber.getText()).isEmpty()){
                    CustomToast.makeText(ChangeUserNameActivity.this, "Nhập thiếu thông tin!", CustomToast.LENGTH_LONG, CustomToast.ERROR, true).show();
                } else {
                    user.setName(String.valueOf(binding.userName.getText()));
                    SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
                    try {
                        Date date1 = format.parse(String.valueOf(binding.userDob.getText()));
                        user.setBirthday(date1);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    user.setPhone_number(String.valueOf(binding.userNumber.getText()));
                    authRepositories.changeInfoUser(auth, user);
                    Log.println(Log.VERBOSE, "USERDATA: ", user.getName());
                    Log.println(Log.VERBOSE, "USERDATA: ", String.valueOf(user.getBirthday()));
                    Log.println(Log.VERBOSE, "USERDATA: ", user.getPhone_number());
                    finish();
                }
            }
        });
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
    }

    public void doInitialization(){
        authRepositories = new AuthRepositories();
        sharedPrefManager = new SharedPrefManager(getApplicationContext());
    }
}