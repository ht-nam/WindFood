package com.project.windfood_client.ui.auth;

import android.os.Bundle;
import android.util.Log;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.project.windfood_client.databinding.ActivityChangePasswordBinding;
import com.project.windfood_client.models.User;
import com.project.windfood_client.repositories.auth.AuthRepositories;
import com.project.windfood_client.utils.CustomToast;
import com.project.windfood_client.utils.SharedPrefManager;
import org.mindrot.jbcrypt.*;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ChangePasswordActivity extends AppCompatActivity {
    private AuthRepositories authRepositories;
    private ActivityChangePasswordBinding binding;
    private SharedPrefManager sharedPrefManager;
    private User user;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityChangePasswordBinding.inflate(getLayoutInflater());
        doInitialization();
        initData();
        setContentView(binding.getRoot());
    }
    void initData(){
        String auth = "Bearer " + sharedPrefManager.getToken();
        binding.btnSaveP.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String password = String.valueOf(binding.userPassword.getText());
                String newpassword = String.valueOf(binding.userNewpassword.getText());
                String cfpassword = String.valueOf(binding.userCfpassword.getText());
                if ( password.isEmpty() || newpassword.isEmpty() || cfpassword.isEmpty()) {
                    CustomToast.makeText(ChangePasswordActivity.this, "Nhập thiếu thông tin!", CustomToast.LENGTH_LONG, CustomToast.ERROR, true).show();
                } else if (!newpassword.equals(cfpassword)) {
                    CustomToast.makeText(ChangePasswordActivity.this, "Mật khẩu mới không khớp!", CustomToast.LENGTH_LONG, CustomToast.ERROR, true).show();
                } else if (newpassword.equals(password)) {
                    CustomToast.makeText(ChangePasswordActivity.this, "Mật khẩu mới không được trùng mật khẩu cũ!", CustomToast.LENGTH_LONG, CustomToast.ERROR, true).show();
                } else {
                    authRepositories.changePassword(auth, password, newpassword).observe(ChangePasswordActivity.this, response -> {
//                        CustomToast.makeText(ChangePasswordActivity.this, "Đổi mật khẩu thành công!", CustomToast.LENGTH_LONG, CustomToast.SUCCESS, true).show();
                        CustomToast.makeText(ChangePasswordActivity.this, response, CustomToast.LENGTH_LONG, CustomToast.SUCCESS, true).show();
                        finish();
                    });
                }
            }
        });
        binding.btnBackP.setOnClickListener(new View.OnClickListener() {
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
