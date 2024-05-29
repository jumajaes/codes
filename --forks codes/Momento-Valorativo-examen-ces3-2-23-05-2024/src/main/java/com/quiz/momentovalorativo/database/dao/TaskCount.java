package com.quiz.momentovalorativo.database.dao;

public class TaskCount {
    private int id_project;
    private int count_task;

    public TaskCount(int id_project, int count_task) {
        this.id_project = id_project;
        this.count_task = count_task;
    }

    public int getId_project() {
        return id_project;
    }

    public void setId_project(int id_project) {
        this.id_project = id_project;
    }

    public int getCount_task() {
        return count_task;
    }

    public void setCount_task(int count_task) {
        this.count_task = count_task;
    }
}
