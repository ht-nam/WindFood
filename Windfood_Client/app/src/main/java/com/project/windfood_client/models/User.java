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
    private int role;
    @SerializedName("birthday")
    private Date birthday;
    @SerializedName("phoneNumber")
    private String phone_number;
    @SerializedName("hashedPassword")
    private String hashedpassword;
    private String newpassword;
    private String cfpassword;

    public User(String name, Date birthday, String phone_number) {
        this.name = name;
        this.birthday = birthday;
        this.phone_number = phone_number;
    }
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
    public User(Integer personId, String username,String hashedpassword ,String password, String name, int role, Date birthday, String phone_number) {
        this.personId = personId;
        this.username = username;
        this.password = password;
        this.hashedpassword = hashedpassword;
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
    public int getRole() { return role; }
    public void setRole(int role) { this.role = role; }
    public Date getBirthday() { return birthday; }
    public void setBirthday(Date birthday) { this.birthday = birthday;}
    public String getPhone_number() { return phone_number; }
    public void setPhone_number(String phone_number) { this.phone_number = phone_number; }
    public String getHashedpassword() { return hashedpassword; }
    public void setHashedpassword(String hashedpassword) { this.hashedpassword = hashedpassword; }
    public String getNewpassword() { return newpassword; }
    public void setNewpassword(String newpassword) { this.newpassword = newpassword; }
    public String getCfpassword() { return cfpassword; }
    public void setCfpassword(String cfpassword) { this.cfpassword = cfpassword; }
}
