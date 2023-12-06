package com.project.windfood_client.responses;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class FoodPagingResponses {
    @SerializedName("data")
    private List<FoodResponses> data;

    @SerializedName("count")
    private Integer count;

    @SerializedName("hasNext")
    private Boolean hasNext;

    public FoodPagingResponses(List<FoodResponses> data, Integer count, Boolean hasNext) {
        this.data = data;
        this.count = count;
        this.hasNext = hasNext;
    }

    public List<FoodResponses> getData() {
        return data;
    }

    public void setData(List<FoodResponses> data) {
        this.data = data;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Boolean getHasNext() {
        return hasNext;
    }

    public void setHasNext(Boolean hasNext) {
        this.hasNext = hasNext;
    }
}
