import { useState } from "react";
import task from '../../../../../store/task.ts';

import {
  BorderColor,
  DeleteForever
} from "@mui/icons-material";

export const useUserTask = (useTask:typeof task) => {
  
  const [titleTask, setTitle] = useState<string>(useTask.name);
  const [descriptionTask, setDescription] = useState<string>(useTask.description);
  const [expirationDateTask, setExpirationDate] = useState(useTask.expirationdate);
  const [priorityTask, setPriority] = useState<"medium" | "low" | "high" | "">(useTask.priority);
  const [stateTask, setState] = useState<"canceled" | "completed" | "expirated" | "active" | "">(useTask.state);
  const [assignToTask, setAssignTo] = useState<number>(useTask.assignedto);
  const [idTask, setIdTask] = useState<number>(useTask.id);
  
  const [open, setOpen] = useState<boolean>(false);
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
