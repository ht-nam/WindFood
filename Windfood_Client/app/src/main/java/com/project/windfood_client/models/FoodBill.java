package com.project.windfood_client.models;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class FoodBill implements Serializable {
    @SerializedName("foodBillId")
    private Integer foodBillId;

    @SerializedName("quantity")
    private Integer quantity;

    @SerializedName("createDate")
    private String createDate;

    @SerializedName("food")
    private Food food;

    @SerializedName("bill")
    private Bill bill;

    public FoodBill(Integer foodBillId, Integer quantity, String createDate, Food food, Bill bill) {
        this.foodBillId = foodBillId;
        this.quantity = quantity;
        this.createDate = createDate;
        this.food = food;
        this.bill = bill;
    }

    public Integer getFoodBillId() {
        return foodBillId;
    }

    public void setFoodBillId(Integer foodBillId) {
        this.foodBillId = foodBillId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }
}
