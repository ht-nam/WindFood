package com.project.windfood_client.models;

import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class User {
    @SerializedName("personId")
    private Integer personId;
    @SerializedName("username")
    private String username;
    @SerializedName("name")
    private String name;
    @SerializedName("password")
    private String password;
    @SerializedName("role")
    private String role;
    @SerializedName("birthday")
    private Date birthday;
    @SerializedName("phoneNumber")
    private String phone_number;

    public User(String name, Date birthday, String phone_number) {
        this.name = name;
        this.birthday = birthday;
        this.phone_number = phone_number;
    }
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
    public User(Integer personId, String username, String password, String name, String role, Date birthday, String phone_number) {
        this.personId = personId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.role = role;
        this.birthday = birthday;
        this.phone_number = phone_number;
    }

    public Integer getPersonId() {
        return personId;
    }

    public void setPersonId(Integer personId) {
        this.personId = personId;
    }

    public String getUsername() { return username; }
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
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public Date getBirthday() { return birthday; }
    public void setBirthday(Date birthday) { this.birthday = birthday;}
    public String getPhone_number() { return phone_number; }
    public void setPhone_number(String phone_number) { this.phone_number = phone_number; }
}
