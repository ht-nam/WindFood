package com.project.windfood_client.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils {
    public static String getFormattedDate(String createDate) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date date = sdf.parse(createDate);
            sdf.applyPattern("dd/MM/yyyy");
            return sdf.format(date);
        }catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
