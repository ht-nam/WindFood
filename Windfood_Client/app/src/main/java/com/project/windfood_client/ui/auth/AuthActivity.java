package com.project.windfood_client.ui.auth;

import androidx.databinding.DataBindingUtil;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.ActivityAuthBinding;
import com.project.windfood_client.models.User;
import com.project.windfood_client.repositories.auth.AuthRepositories;
import com.project.windfood_client.utils.SharedPrefManager;

public class AuthActivity extends AppCompatActivity {
    private ActivityAuthBinding binding;
    private EditText editTextUsername, editTextPassword;
    private Button buttonLogin;
    private AuthRepositories authRepository;
    private SharedPrefManager sharedPrefManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_auth);
//        setContentView(R.layout.activity_auth);
        doInitialization();
        editTextUsername = findViewById(R.id.editTextUsername);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.out.println(editTextUsername.getText().toString());
                System.out.println(editTextPassword.getText().toString());
                User user = new User(editTextUsername.getText().toString(), editTextPassword.getText().toString());
                authRepository.loginUser(user).observe(AuthActivity.this, response -> {
                    if(response != null){
                        sharedPrefManager.saveToken(response.toString());
                        Toast.makeText(AuthActivity.this, "Đăng nhập thành công!", Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });
    }

    private void doInitialization(){
        authRepository = new AuthRepositories();
        sharedPrefManager = new SharedPrefManager(this);
    }
}