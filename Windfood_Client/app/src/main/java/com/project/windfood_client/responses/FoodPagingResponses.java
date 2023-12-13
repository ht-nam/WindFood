package com.project.windfood_client.responses;

import com.google.gson.annotations.SerializedName;
import com.project.windfood_client.models.Food;

import java.util.List;

public class FoodPagingResponses {
    @SerializedName("data")
    private List<Food> data;

    @SerializedName("count")
    private Integer count;

    @SerializedName("hasNext")
    private Boolean hasNext;

    public FoodPagingResponses(List<Food> data, Integer count, Boolean hasNext) {
        this.data = data;
        this.count = count;
        this.hasNext = hasNext;
    }

    public List<Food> getData() {
        return data;
    }

    public void setData(List<Food> data) {
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
