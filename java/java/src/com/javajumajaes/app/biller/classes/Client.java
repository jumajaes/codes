package com.javajumajaes.app.biller.classes;

public class Client {

    private final int client_id;
    private String client_name;

    public int getClient_id() {
        return client_id;
    }

    public String getClient_name() {
        return client_name;
    }

    public void setClient_name(String client_name) {
        this.client_name = client_name;
    }

    public Client(int client_id) {
        this.client_id = client_id;
    }




}
