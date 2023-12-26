package com.project.windfood_client.models;

import com.google.gson.annotations.SerializedName;

public class User {
    @SerializedName("username")
    private String username;
    @SerializedName("name")
    private String name;
    @SerializedName("password")
    private String password;
    @SerializedName("role")
    private int role;
    @SerializedName("birthday")
    private String birthday;
    @SerializedName("phone_number")
    private String phone_number;
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
    public User(String username, String password, String name, int role, String birthday, String phone_number) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.role = role;
        this.birthday = birthday;
        this.phone_number = phone_number;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getName() { return name;}
    public void setName(String name) { this.name = name; }
    public int getRole() { return role; }
    public void setRole(int role) { this.role = this.role; }
    public String getBirthday() { return birthday; }
    public void setBirthday(String birthday) { this.birthday = birthday;}
    public String getPhone_number() { return phone_number; }
    public void setPhone_number(String phone_number) { this.phone_number = phone_number; }
}
