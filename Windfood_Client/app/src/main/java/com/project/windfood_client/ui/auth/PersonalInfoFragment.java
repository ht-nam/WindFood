package com.project.windfood_client.ui.auth;

import android.os.Bundle;

import androidx.databinding.ObservableField;
import androidx.fragment.app.Fragment;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.Observer;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.FragmentPersonalInfoBinding;
import com.project.windfood_client.models.User;
import com.project.windfood_client.repositories.auth.AuthRepositories;
import com.project.windfood_client.utils.SharedPrefManager;

import org.checkerframework.checker.units.qual.A;

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
            this.user.setUsername(response.getUsername());
            this.user.setName(response.getName());
            if (response.getRole() == "0"){
                this.user.setRole("ADMIN");
            } else {
                this.user.setRole("Người dùng");
            }
            this.user.setBirthday(response.getBirthday());
            this.user.setPhone_number(response.getPhone_number());
            Log.println(Log.VERBOSE, "DATAUSER: ", String.valueOf(response.getUsername()));
            binding.setUser(this.user);
        });
        return rootView;
    }

    public void doInitialization(){
        authRepositories = new AuthRepositories();
        sharedPrefManager = new SharedPrefManager(getActivity().getApplicationContext());
    }
}