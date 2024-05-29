package com.quiz.momentovalorativo.database.dao;

import java.util.ArrayList;
import java.util.Date;

public class Project {
    private int id;
    private String name;
    private String manager;
    private String details;
    private Date createdAt;
    private Date updatedAt;
    private Date deletedAt;
    private ArrayList<Task> tasks = new ArrayList<>();

    public Project(int id, String name, String manager, String details, Date createdAt, Date updatedAt, Date deletedAt, ArrayList<Task> tasks) {
        this.id = id;
        this.name = name;
        this.manager = manager;
        this.details = details;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.tasks = tasks;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Date getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(Date deletedAt) {
        this.deletedAt = deletedAt;
    }

    public ArrayList<Task> getTasks() {
        return tasks;
    }

    public void setTasks(ArrayList<Task> tasks) {
        this.tasks = tasks;
    }
}
