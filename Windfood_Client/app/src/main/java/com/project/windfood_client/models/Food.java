package com.project.windfood_client.models;

import com.google.gson.annotations.SerializedName;

public class Food {
    @SerializedName("foodId")
    private Integer id;
    @SerializedName("foodName")
    private String foodName;
    @SerializedName("quantity")
    private Integer quantity;
    @SerializedName("importPrice")
    private Float importPrice;
    @SerializedName("price")
    private Float price;
    @SerializedName("description")
    private String description;
    @SerializedName("urlImg")
    private String urlImg;
    @SerializedName("createDate")
    private String createDate;
    public Food(Integer id, String foodName, Integer quantity, Float importPrice, Float price, String description, String urlImg, String createDate) {
        this.id = id;
        this.foodName = foodName;
        this.quantity = quantity;
        this.importPrice = importPrice;
        this.price = price;
        this.description = description;
        this.urlImg = urlImg;
        this.createDate = createDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Float getImportPrice() {
        return importPrice;
    }

    public void setImportPrice(Float importPrice) {
        this.importPrice = importPrice;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }
}
