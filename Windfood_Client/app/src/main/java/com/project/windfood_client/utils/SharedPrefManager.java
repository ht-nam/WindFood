package com.project.windfood_client.utils;

import android.content.Context;
import android.content.SharedPreferences;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.project.windfood_client.models.Food;

import java.util.Collection;
import java.util.Iterator;
import java.util.Set;

public class SharedPrefManager {
    private static final String SHARED_PREF_NAME = "MySharedPref";
    private static final String KEY_TOKEN = "key_token";
    private static final String KEY_ROLE = "key_role";
    private static final String KEY_CART = "cartKey";

    private SharedPreferences sharedPreferences;
    private SharedPreferences.Editor editor;

    public SharedPrefManager(Context context) {
        sharedPreferences = context.getSharedPreferences(SHARED_PREF_NAME, Context.MODE_PRIVATE);
        editor = sharedPreferences.edit();
    }

    public void saveToken(String token) {
        editor.putString(KEY_TOKEN, token);
        editor.apply();
    }

    public void saveRole(int role){
        if(role == 0){
            editor.putString(KEY_ROLE, "ADMIN");
        }else{
            editor.putString(KEY_ROLE, "NV");
        }
        editor.apply();
    }

    public String getCurrentRole(){
        if(!sharedPreferences.getString(KEY_ROLE, "").isEmpty()){
            return sharedPreferences.getString(KEY_ROLE, "");
        }else{
            return "";
        }
    }

    public String getToken() {
        return sharedPreferences.getString(KEY_TOKEN, "");
    }

    public void clearToken() {
        editor.remove(KEY_TOKEN);
        editor.apply();
    }

    public void saveItemToCart(Set<String> foods){
        editor.putStringSet(KEY_CART, foods);
        editor.apply();
    }

    public Set<String> getCartItem(){
        return sharedPreferences.getStringSet(KEY_CART, null);
    }

    public void clearCartItem(){
        editor.remove(KEY_CART);
        editor.apply();
    }
}
