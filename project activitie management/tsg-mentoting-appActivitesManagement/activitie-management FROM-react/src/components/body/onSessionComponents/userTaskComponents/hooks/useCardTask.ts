import { useState } from "react";

import {
  BorderColor,
  DeleteForever
} from "@mui/icons-material";

export const useCardTask = ({
  id,
  name,
  description,
  expirationdate,
  priority,
  state,
  assignedto
}) => {
  
  
  const [titleTask, setTitle] = useState<string>(name);
  const [descriptionTaskCard, setDescriptionCard] = useState<string>(description);
  const [expirationDateTask, setExpirationDate] = useState(expirationdate);
  const [priorityCardTask, setPriorityCardTask] =useState(priority);
  const [stateTask, setState] = useState(state);
  const [assignToTask, setAssignTo] = useState<string>(assignedto);
  const [idTask, setIdTask] = useState<number>(id);
  
  const [openCardTask, setOpenCardTask] = useState<boolean>(false);
  const [colorState, setColorState] = useState("primary");
  const [colorFondo, setColorFondo] = useState<string>("#e1e7f8");
  const [backGroundColor, setBackGroundColor] = useState<string>("#2196f3");
  const [iconState, setIconState] = useState<any>();

  
  
  const handleClickAway = () => {
    setOpenCardTask(false);
  };

  return {
    titleTask, setTitle,
    descriptionTaskCard, setDescriptionCard,
    expirationDateTask, setExpirationDate,
    priorityCardTask, setPriorityCardTask,
    stateTask, setState,
    assignToTask, setAssignTo, idTask, setIdTask,
    openCardTask, setOpenCardTask,
    colorState, setColorState,
    colorFondo, setColorFondo,
    backGroundColor, setBackGroundColor,
    iconState, setIconState,
    BorderColor,DeleteForever,
    handleClickAway, 
      id,
      name,
      description,
      expirationdate,
      priority,
      state,
      assignedto
    
  };
};
