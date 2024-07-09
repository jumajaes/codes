import React, { ReactElement, useEffect, useState } from "react";

import {
    TaskAlt,
    Cancel,
    BorderColor,
    DeleteForever,
    Task
  } from "@mui/icons-material";

export const useCreateTask = ({
    id,
    title,
    descriptión,
    expirationDate,
    priority,
    state,
    assingto,
  }) => {

  const [titleTask, setTitle] = useState(title);
  const [descriptionTask, setDescription] = useState(descriptión);
  const [expirationDateTask, setExpirationDate] = useState(expirationDate);
  const [priorityTask, setPriority] = useState(priority);
  const [stateTask, setState] = useState(state);
  const [assignToTask, setAssignTo] = useState(assingto);
  const [idTask, setIdTask] = useState(id);

  const [open, setOpen] = useState(false);
  const [colorState, setColorState] = useState<
    "primary" | "success" | "error" | "secondary" | "info" | "warning"
  >("primary");
  const [colorFondo, setColorFondo] = useState("#e1e7f8");
  const [backGroundColor, setBackGroundColor] = useState("#2196f3");
  const [iconState, setIconState] = useState(<Box></Box>);

  useEffect(() => {
    stateTask === "active" &&
      new Date() < new Date(expirationDateTask) &&
      setState("expirated");

    stateTask === "active" &&
      (() => {
        setColorState("primary");
        setColorFondo("#e1e7f8");
        setIconState(<Task />);
      })();
    stateTask === "completed" &&
      (() => {
        setColorState("success");
        setColorFondo("#dce9db");
        setIconState(<TaskAlt />);
      })();
    stateTask === "canceled" &&
      (() => {
        setColorState("error");
        setColorFondo("#ffdfd9");
        setIconState(<Cancel />);
      })();
    stateTask === "expirated" &&
      (() => {
        setColorState("warning");
        setColorFondo("#ffe9d7");
        setIconState(<PriorityHigh />);
      })();

    priorityTask === "medium"
      ? setBackGroundColor("#2196f3")
      : priorityTask === "high"
      ? setBackGroundColor("#ffc107")
      : setBackGroundColor("#9E9E9E");
  }, [stateTask, priorityTask, expirationDateTask]);

  const handleClickAway = () => {
    setOpen(false);
  };
};
