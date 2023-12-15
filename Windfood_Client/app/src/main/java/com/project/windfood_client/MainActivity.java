package com.project.windfood_client;

import com.project.windfood_client.*;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.util.Base64;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.ViewModelProvider;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.project.windfood_client.databinding.ActivityAuthBinding;
import com.project.windfood_client.databinding.ActivityMainBinding;
import com.project.windfood_client.models.User;
import com.project.windfood_client.ui.auth.AuthActivity;
import com.project.windfood_client.utils.CustomToast;
import com.project.windfood_client.utils.SharedPrefManager;
import com.project.windfood_client.viewmodels.auth.AuthViewModels;

import org.json.JSONException;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {

    private ActivityAuthBinding binding;
    private ActivityMainBinding mainBinding;
    private AuthViewModels authViewModels;
    private EditText editTextUsername, editTextPassword;
    private Button buttonLogin;
    private ProgressBar prgLog;
    private SharedPrefManager sharedPrefManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        doInitialization();
//        sharedPrefManager.clearToken();
    }
    private void doInitialization(){
        authViewModels = new ViewModelProvider(this).get(AuthViewModels.class);
        sharedPrefManager = new SharedPrefManager(this);
        ActionBar actionBar = getSupportActionBar();
        if(sharedPrefManager.getToken().isEmpty()){
            binding = ActivityAuthBinding.inflate(getLayoutInflater());
            setContentView(binding.getRoot());
            editTextUsername = (EditText) findViewById(R.id.editTextUsername);
            editTextPassword = (EditText) findViewById(R.id.editTextPassword);
            buttonLogin = (Button) findViewById(R.id.buttonLogin);
            prgLog = (ProgressBar) findViewById(R.id.prgLog);
            actionBar.hide();
            buttonLogin.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    buttonLogin.setVisibility(View.GONE);
                    prgLog.setVisibility(View.VISIBLE);
                    User user = new User(editTextUsername.getText().toString(), editTextPassword.getText().toString());
                    if(user.getUsername().isEmpty() || user.getPassword().isEmpty()){
                        CustomToast.makeText(MainActivity.this, "Tên đăng nhập hoặc mật khẩu không được bỏ trổng!", CustomToast.LENGTH_LONG, CustomToast.CONFUSING, true).show();
                        buttonLogin.setVisibility(View.VISIBLE);
                        prgLog.setVisibility(View.GONE);
                    }else{
                        authViewModels.loginUser(user).observe(MainActivity.this, response -> {
                            if(!response.isEmpty()){
                                sharedPrefManager.saveToken(response.toString());
                                CustomToast.makeText(MainActivity.this, "Đăng nhập thành công!", CustomToast.LENGTH_LONG, CustomToast.SUCCESS, true).show();
                                if(!sharedPrefManager.getToken().isEmpty()){
                                    finish();
                                    startActivity(getIntent());
                                }
                            }else{
                                CustomToast.makeText(MainActivity.this, "Đăng nhập thất bại!", CustomToast.LENGTH_LONG, CustomToast.ERROR, true).show();
                                buttonLogin.setVisibility(View.VISIBLE);
                                prgLog.setVisibility(View.GONE);
                            }
                        });
                    }
                }
            });
        }else{
            checkTokenExpiration();
            mainBinding = ActivityMainBinding.inflate(getLayoutInflater());
            setContentView(mainBinding.getRoot());
//            final ActionBar actionBar = getActionBar();
            actionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#2980b9")));
            BottomNavigationView navView = findViewById(R.id.nav_view);
            AppBarConfiguration appBarConfiguration = new AppBarConfiguration.Builder(
                    R.id.navigation_home, R.id.navigation_dashboard, R.id.navigation_notifications)
                    .build();
            NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_activity_main);
            NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);
            NavigationUI.setupWithNavController(mainBinding.navView, navController);
        }
    }

    private void checkTokenExpiration() {
        long currentTime = System.currentTimeMillis();

        String token = sharedPrefManager.getToken(); // Get the token from wherever it's stored in your app
        if (token == null) {
            // If there's no token, navigate to the login screen
            navigateToLoginScreen();
            return;
        }

        try {
            String[] parts = token.split("\\.");
            String payload = parts[1];

            // Base64 decode the payload to get the JSON payload
            String decodedPayload = new String(Base64.decode(payload, Base64.DEFAULT));

            // Parse the JSON payload and get the "exp" field
            JSONObject jsonPayload = new JSONObject(decodedPayload);
            long expirationTime = jsonPayload.getLong("exp");

            // Convert the expiration time from seconds to milliseconds
            expirationTime *= 1000;

            // Check if the token has expired
            if (currentTime > expirationTime) {
                // If the token has expired, navigate to the login screen
                sharedPrefManager.clearToken();
                navigateToLoginScreen();
            }
        } catch (JSONException e) {
            // If there's an error parsing the token, navigate to the login screen
            navigateToLoginScreen();
        }
    }

    private void navigateToLoginScreen() {
        Intent intent = new Intent(this, AuthActivity.class);
        startActivity(intent);
//        CustomToast.makeText(getApplicationContext(), "Thời gian hoạt động trên ứng dụng của bạn đã hết, vui lòng đăng nhập lại!", CustomToast.LENGTH_SHORT, CustomToast.WARNING, true).show();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        if(!sharedPrefManager.getToken().isEmpty()){
            MenuInflater inflater = getMenuInflater();
            inflater.inflate(R.menu.dropdown_menu, menu);
        }
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();
        if(id == R.id.personalInforId){

        }else if(id == R.id.logoutId){
            sharedPrefManager.clearToken();
            finish();
            startActivity(getIntent());
        }
        return super.onOptionsItemSelected(item);
    }
}