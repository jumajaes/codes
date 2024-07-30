package com.backendmentor.app.exceptions;

import java.sql.Timestamp;

public class LogicExceptionEntity {
    public int codeStatus;
    public String message;
    public Timestamp date;

    public LogicExceptionEntity(int codeStatus, String message, Timestamp date) {
        this.codeStatus = codeStatus;
        this.message = message;
        this.date = date; 
    }

    public int getCodeStatus() {
        return codeStatus;
    }

    public String getMessage() {
        return message;
    }

    public Timestamp getDate() {
        return date;
    }
}
