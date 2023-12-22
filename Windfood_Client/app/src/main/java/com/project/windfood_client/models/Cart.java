package com.project.windfood_client.models;

import java.util.ArrayList;
import java.util.List;

public class Cart {
    public static List<Food> cartItems = new ArrayList<>();

    public static void addItemToCart(Food food){
        if(!cartItems.contains(food)){
            cartItems.add(food);
        }
    }

    public static void removeItemFromCart(Integer id){
        if(id != null){
            cartItems.removeIf(e -> e.getId() == id);
        }
    }
}
