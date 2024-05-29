package com.quiz.momentovalorativo.servlets;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.quiz.momentovalorativo.database.repositories.TaskRepository;

import java.io.*;
import java.sql.SQLException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "taskProjectServlet", value = "/tasks-project")
public class TasksProjectServlet extends HttpServlet {
    private GsonBuilder gsonBuilder;
    private Gson gson;

    public void init(){
        gsonBuilder = new GsonBuilder();
        gson = gsonBuilder.create();
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        String idProject = request.getParameter("idProject");

        PrintWriter out = response.getWriter();
        TaskRepository repo = new TaskRepository();
        try {

            out.print(gson.toJson(repo.get(Integer.parseInt(idProject))));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        out.flush();
    }

    public void destroy() {
    }
}
