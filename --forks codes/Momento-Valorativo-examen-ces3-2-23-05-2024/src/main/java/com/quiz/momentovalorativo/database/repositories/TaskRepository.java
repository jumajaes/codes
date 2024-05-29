package com.quiz.momentovalorativo.database.repositories;

import com.quiz.momentovalorativo.database.Conexion;
import com.quiz.momentovalorativo.database.dao.Task;
import com.quiz.momentovalorativo.database.dao.TaskCount;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TaskRepository {
    private Conexion conMysql;


    public TaskRepository(){
        conMysql = new Conexion("localhost");
    }

    public List<Task> get() throws SQLException {
        Connection con = conMysql.conexion();
        Statement sts = con.createStatement();
        ResultSet rs = sts.executeQuery("SELECT * FROM task");
        List<Task> list = new ArrayList<>();

        while (rs.next()){
            list.add(new Task(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getString("description"),
                    rs.getString("status"),
                    rs.getInt("priority"),
                    rs.getDate("createdAt"),
                    rs.getDate("updatedAt"),
                    rs.getDate("deletedAt"),
                    rs.getInt("id_project")
            ));
        }

        rs.close();
        sts.close();
        con.close();

        return list;
    }

    public List<Task> get(int id) throws SQLException {
        Connection con = conMysql.conexion();
        PreparedStatement sts = con.prepareStatement("SELECT * FROM task WHERE id_project = ?");
        sts.setInt(1,id);

        List<Task> list = new ArrayList<>();

        ResultSet rs = sts.executeQuery();
        if (rs.next()) {
            do {
                list.add(new Task(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("description"),
                        rs.getString("status"),
                        rs.getInt("priority"),
                        rs.getDate("createdAt"),
                        rs.getDate("updatedAt"),
                        rs.getDate("deletedAt"),
                        rs.getInt("id_project")
                ));
            } while (rs.next());
        }

        rs.close();
        sts.close();
        con.close();

        return list;
    }

    public List<Integer> getIdProjects() throws SQLException {
        Connection con = conMysql.conexion();
        Statement sts = con.createStatement();
        ResultSet rs = sts.executeQuery("SELECT id FROM project");
        ArrayList<Integer> list = new ArrayList<Integer>();

        if (rs.next()) {
            do {
                list.add(rs.getInt("id"));
            } while (rs.next());
        }
        rs.close();
        con.close();
        return list;
    }

    public List<TaskCount> getCountTasks(List<Integer> listIds) throws SQLException {
        Connection con = conMysql.conexion();
        ArrayList<TaskCount> list = new ArrayList<TaskCount>();

        for (int i = 0; i < listIds.toArray().length; i++) {
            PreparedStatement sts = con.prepareStatement("SELECT id_project, count(id) as count_task FROM task WHERE id_project = ? GROUP BY id_project");
            sts.setInt(1, listIds.get(i));
            ResultSet rs = sts.executeQuery();

            if (rs.next()) {
                do {
                    list.add(new TaskCount(
                        rs.getInt("id_project"),
                        rs.getInt("count_task")
                    ));
                } while (rs.next());
            }
        }

        con.close();
        return list;
    }
}
