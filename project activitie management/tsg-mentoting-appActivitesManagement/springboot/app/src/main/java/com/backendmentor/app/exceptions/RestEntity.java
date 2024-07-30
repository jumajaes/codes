package com.backendmentor.app.exceptions;

import java.sql.Timestamp;
import org.springframework.http.HttpStatus;

public class RestEntity {
    public int codeStatus;
    public HttpStatus status;
    public String message;
    public Timestamp date;
    private Object data;

    public RestEntity(int codeStatus, HttpStatus status, Object data, String message, Timestamp date) {
        this.codeStatus = codeStatus;
        this.status = status;
        this.message = message;
        this.date = date;
        this.data = data;
    }

    public int getCodeStatus() {
        return codeStatus;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public Timestamp getDate() {
        return date;
    }

    public Object getData() {
        return data;
    }
}
