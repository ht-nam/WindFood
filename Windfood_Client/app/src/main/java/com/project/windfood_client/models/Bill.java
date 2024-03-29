package com.project.windfood_client.models;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;
import java.util.List;

public class Bill implements Serializable {
    @SerializedName("billId")
    private Integer billId;
    @SerializedName("totalPrice")
    private Integer totalPrice;
    @SerializedName("createDate")
    private String createDate;
    @SerializedName("paymentMethod")
    private String paymentMethod;

    @SerializedName("foodBills")
    private List<FoodBill> foodBillList;

    public Bill(Integer billId, Integer totalPrice, String createDate, String paymentMethod, List<FoodBill> foodBillList) {
        this.billId = billId;
        this.totalPrice = totalPrice;
        this.createDate = createDate;
        this.paymentMethod = paymentMethod;
        this.foodBillList = foodBillList;
    }

    public Integer getBillId() {
        return billId;
    }

    public void setBillId(Integer billId) {
        this.billId = billId;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public List<FoodBill> getFoodBillList() {
        return foodBillList;
    }

    public void setFoodBillList(List<FoodBill> foodBillList) {
        this.foodBillList = foodBillList;
    }
}
