package com.project.windfood_client.responses;

import com.google.gson.annotations.SerializedName;
import com.project.windfood_client.models.Bill;

import java.util.List;

public class BillPagingResponse {
    @SerializedName("data")
    private List<Bill> data;
    @SerializedName("count")
    private Integer count;

    public BillPagingResponse(List<Bill> data, Integer count) {
        this.data = data;
        this.count = count;
    }

    public List<Bill> getData() {
        return data;
    }

    public void setData(List<Bill> data) {
        this.data = data;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
