package com.project.windfood_client.ui.cart;

import android.util.Log;
import android.widget.Toast;

import com.project.windfood_client.models.Cart;
import com.project.windfood_client.models.Food;
import com.project.windfood_client.repositories.foods.FoodRepositories;
import com.project.windfood_client.requests.PagingRequest;
import com.project.windfood_client.responses.FoodPagingResponses;
import com.project.windfood_client.utils.SharedPrefManager;

import java.util.Arrays;
import java.util.Hashtable;
import java.util.List;

public class CartVoiceSupport {
    static Hashtable<String, String> underTenMap = new Hashtable<String, String>();
    static private FoodRepositories foodRepository;

    public static void addToCart(String voiceResult, String userToken) throws InterruptedException {
        initHashMap();
        Cart.cartItems.clear();
        List<String> data = dataProcessing(voiceResult);
        for (String item: data) {
            String cartQuantity = item.split(" ")[0];
            String searchString = item.replaceAll("[0-9]", "").trim();

            Thread thread = new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Food food = foodRepository.getFoodSearch(new PagingRequest(1, 1, searchString), "Bearer " + userToken);
                        food.setCartQuantity(Integer.parseInt(cartQuantity));
                        Cart.cartItems.add(food);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            });

            thread.start();
            thread.join();
        }
    }

    private static List<String> dataProcessing(String string) {
        List<String> result = Arrays.asList(string.split("và|với"));
        for (int i = 0; i < result.size(); i++) {
            for (String key: underTenMap.keySet()) {
                result.set(i, result.get(i).replace(key, underTenMap.get(key)));
            }
            result.set(i, result.get(i).trim());
        }
        return result;
    }

    private static void initHashMap() {
        foodRepository = new FoodRepositories();

        underTenMap.put("một", "1");
        underTenMap.put("hai", "2");
        underTenMap.put("ba", "3");
        underTenMap.put("bốn", "4");
        underTenMap.put("năm", "5");
        underTenMap.put("sáu", "6");
        underTenMap.put("bảy", "7");
        underTenMap.put("tám", "8");
        underTenMap.put("chín", "9");
    }
}
