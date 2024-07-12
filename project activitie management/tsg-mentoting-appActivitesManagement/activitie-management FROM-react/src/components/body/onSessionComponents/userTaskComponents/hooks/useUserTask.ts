import { useState } from "react";

import {
  TaskAlt,
  Cancel,
  BorderColor,
  DeleteForever,
  Task,
  PriorityHigh
} from "@mui/icons-material";

export const useCreateTask = (
  
    id,
    title,
    descriptión,
    expirationDate,
    priority,
    state,
    assingto,
  
) => {

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
  const [colorFondo, setColorFondo] = useState<string>("#e1e7f8");
  const [backGroundColor, setBackGroundColor] = useState<string>("#2196f3");
  const [iconState, setIconState] = useState<any>();

  const handleClickAway = () => {
    setOpen(false);
  };

  return {
    titleTask, setTitle,
    descriptionTask, setDescription,
    expirationDateTask, setExpirationDate,
    priorityTask, setPriority,
    stateTask, setState,
    assignToTask, setAssignTo
    , idTask, setIdTask,
    open, setOpen,
    colorState, setColorState,
    colorFondo, setColorFondo,
    backGroundColor, setBackGroundColor,
    iconState, setIconState,
    BorderColor,DeleteForever,
    

    handleClickAway
  };
};
