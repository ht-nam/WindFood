package com.project.windfood_client.requests;

import com.google.gson.annotations.SerializedName;

public class PagingRequest {
    @SerializedName("pageIndex")
    private Integer pageIndex;
    @SerializedName("pageSize")
    private Integer pageSize;
    @SerializedName("keyword")
    private String search;

    public PagingRequest(Integer pageIndex, Integer pageSize) {
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }
    public PagingRequest(Integer pageIndex, Integer pageSize, String search) {
        this.search = search;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }

    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}

