package com.project.windfood_client.ui.auth;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.project.windfood_client.R;
import com.project.windfood_client.databinding.FragmentPersonalInfoBinding;
import com.project.windfood_client.repositories.auth.AuthRepositories;
import com.project.windfood_client.utils.SharedPrefManager;

import org.checkerframework.checker.units.qual.A;

public class PersonalInfoFragment extends Fragment {

    private AuthRepositories authRepositories;

    private FragmentPersonalInfoBinding binding;

    private SharedPrefManager sharedPrefManager;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        binding = FragmentPersonalInfoBinding.inflate(inflater, container, false);
        doInitialization();
//        B1: authRepositories.getCurrentUser("Bearer " + sharedPrefManager.getToken())
//
//        Response: binding.setUser(response);
        return inflater.inflate(R.layout.fragment_personal_info, container, false);
    }

    public void doInitialization(){
        authRepositories = new AuthRepositories();
        sharedPrefManager = new SharedPrefManager(getActivity().getApplicationContext());
    }
}