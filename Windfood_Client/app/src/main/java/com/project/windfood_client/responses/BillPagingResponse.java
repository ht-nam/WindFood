package com.project.windfood_client.responses;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class BillPagingResponse {
    @SerializedName("data")
    private List<BillResponses> data;
    @SerializedName("count")
    private Integer count;

    public BillPagingResponse(List<BillResponses> data, Integer count) {
        this.data = data;
        this.count = count;
    }

    public List<BillResponses> getData() {
        return data;
    }

    public void setData(List<BillResponses> data) {
        this.data = data;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
