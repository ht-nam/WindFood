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

    public static boolean isExistFood(Integer id) {
        if (cartItems != null && !cartItems.isEmpty()) {
            return cartItems.stream().filter(food -> food.getId() == id).count() > 0;
        }
        return false;
    }

    public static Food getFoodById(Integer id) {
        if (cartItems != null && !cartItems.isEmpty()) {
            return cartItems.stream().filter(food -> food.getId() == id).findFirst().get();
        }
        return null;
    }

    public static long getTotalPrice(){
        if (cartItems != null && !cartItems.isEmpty()) {
            return cartItems.stream().mapToLong(o->o.getPrice() * o.getCartQuantity()).sum();
        }
        return 0;
    }
}
