package com.project.windfood_client.models;

import com.google.gson.annotations.SerializedName;

public class Dashboard {
    @SerializedName("month")
    private Integer month;
    @SerializedName("revenue")
    private String revenue;

    @SerializedName("profit")
    private String profit;

    public Dashboard(int month, String revenue, String profit) {
        this.month = month;
        this.revenue = revenue;
        this.profit = profit;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public String getRevenue() {
        return revenue;
    }

    public void setRevenue(String revenue) {
        this.revenue = revenue;
    }

    public String getProfit() {
        return profit;
    }

    public void setProfit(String profit) {
        this.profit = profit;
    }
}
