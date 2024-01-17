package com.project.windfood_client.ui.auth;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.project.windfood_client.databinding.FragmentPersonalInfoBinding;
import com.project.windfood_client.models.User;
import com.project.windfood_client.repositories.auth.AuthRepositories;
import com.project.windfood_client.utils.SharedPrefManager;

public class PersonalInfoFragment extends Fragment {

    private AuthRepositories authRepositories;

    private FragmentPersonalInfoBinding binding;

    private SharedPrefManager sharedPrefManager;
    private User user;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        super.onCreate(savedInstanceState);
        binding = FragmentPersonalInfoBinding.inflate(inflater, container, false);
        doInitialization();
        View rootView = binding.getRoot();
        String auth = "Bearer " + sharedPrefManager.getToken();
        authRepositories.getCurrentUser(auth).observe(this, response -> {
            this.user = response;
            this.user.setName(response.getName());
            if (response.getRole() == 0){
                this.user.setRolename("ADMIN");
            } else {
                this.user.setRolename("Người dùng");
            }
            this.user.setBirthday(response.getBirthday());
            this.user.setPhone_number(response.getPhone_number());
            binding.setUser(this.user);
        });
        binding.btnChangePass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getActivity(), ChangePasswordActivity.class);
                startActivity(i);
                ((Activity) getActivity()).overridePendingTransition(0, 0);
            }
        });
        binding.btnSwitchToChange.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getActivity(), ChangeUserNameActivity.class);
                startActivity(i);
                ((Activity) getActivity()).overridePendingTransition(0, 0);
            }
        });
        return rootView;
    }

    public void doInitialization(){
        authRepositories = new AuthRepositories();
        sharedPrefManager = new SharedPrefManager(getActivity().getApplicationContext());
    }
}