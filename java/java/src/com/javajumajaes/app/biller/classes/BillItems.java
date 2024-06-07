package com.javajumajaes.app.biller.classes;

import java.util.Arrays;


public class BillItems {

    private int[] items = {1, 2, 3, 4, 5, 6, 7};

    public int[] getItems() {
        return items;
    }

    public void setItems(int[] items) {
        this.items = items;
    }

    private boolean numbersAreEquials(int a, int b){
        if(a == b){
            return true;
        };

        return false;
    }
    public int[] getItem(int item_id){
        return Arrays.stream(this.items).filter( element-> element  === item_id);

    }



}
