package com.javajumajaes.app.biller.classes;

import java.lang.reflect.Type;
import java.util.Date;
import java.util.Random;

public class Bill {

    private  int bill_id;

    private Client client;

    private String bill_description;

    private Date bill_date;

    private BillItems bill_items;

    public Bill(Client client, String bill_description) {
        this.client = client;
        this.bill_description = bill_description;
        try {
            this.bill_id = Integer.parseInt(STR."\{new Date().getTime()}");

        }catch (Exception e){
            System.out.println(STR."\{e} error");

        }
        }



    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public int getBill_id() {
        return bill_id;
    }

    public String getBill_description() {
        return bill_description;
    }

    public void setBill_description(String bill_description) {
        this.bill_description = bill_description;
    }

    public Date getBill_date() {
        return bill_date;
    }

    public void setBill_date(Date bill_date) {
        this.bill_date = bill_date;
    }

    public BillItems getBill_items() {
        return bill_items;
    }

    public void setBill_items(BillItems bill_items) {
        this.bill_items = bill_items;
    }






}
