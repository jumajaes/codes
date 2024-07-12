import { useState } from "react";
import task from "../../../../../store/task.ts";
import { useStore } from "../../../../../store/context.ts";

export const useCreateTask = () => {

  const [backGroundColor, setBackGroundColor] = useState("#2196f3");
  const [priority, setPriority] = useState<"medium" | "low" | "high" | "">("medium");
  const [taskName, setTaskName] = useState<string>("");
  const [valueDataTime, setvalueDataTime] = useState<Date>(new Date()); //.toISOString().split(".")[0]
  const [descriptionTask, setDescriptionTask] = useState<string>("");
  const [primaryAssing, setPrimaryAssing] = useState<string>("-------------------");
  const [primaryAssingId, setPrimaryAssingId] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [openAssingTo, setOpenAssingTo] = useState(false);
  const { sendRequestNewTask } = useStore();
  const [alert, setAlert] = useState<boolean>(false);

  const handleClickPriority = (typePriority: "medium" | "low" | "high" | "") => { 
    
    typePriority === "medium"
      ? setBackGroundColor("#2196f3")
      : typePriority === "high"
      ? setBackGroundColor("#ffc107")
      : setBackGroundColor("#9E9E9E");

    setPriority(typePriority);
  };

  const fxVlidate = () => {
    taskName.length !== 0 &&
    priority.length !== 0 &&
    descriptionTask.length !== 0 &&
    primaryAssingId !== 0
      ? createTask()
      : setAlert(true);
  };

  const handleOnChangeDescription = (event) => {
    setDescriptionTask(event.target.value);
    setDescriptionTask(event.target.value);
    setAlert(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  // const handleClickPriority = () => {
  //   setOpenPriority(true);
  //   setAlert(false);
  // };

  const handleClickAssingTo = () => {
    setOpenAssingTo(!openAssingTo);
    setAlert(false);
  };

  const handleOnChangeName = (event) => {
    setTaskName(event.target.value.trim());
    setAlert(false);
  };

  const handleOnChangeDate = (event) => {
    setvalueDataTime(new Date(event.target.value));
    setAlert(false);
  };

  const handleClickAway = (event) => {
    event.pointerType !== ""  && setOpen(false);
  };

  const createTask = () => {
    const newTask: typeof task = task;
    newTask.name = taskName;
    newTask.description = descriptionTask;
    newTask.expirationDate = valueDataTime;
    newTask.priority = priority;
    newTask.assignedto = primaryAssingId;

    console.log(newTask.name)
    console.log(newTask.expirationDate.toISOString().split(".")[0])
    console.log(newTask.priority)
    console.log(newTask.description)
    console.log(newTask.assignedto)
    console.log(primaryAssing)

    sendRequestNewTask(newTask);
    setAlert(false);
  };

  return {
    backGroundColor, setBackGroundColor,
    priority, handleClickPriority,
    taskName, setTaskName,
    valueDataTime, setvalueDataTime,
    descriptionTask, setDescriptionTask,
    primaryAssing, setPrimaryAssing,
    primaryAssingId, setPrimaryAssingId,
    open, setOpen,
    openAssingTo, setOpenAssingTo,
    alert, setAlert,
    sendRequestNewTask,
    fxVlidate,
    handleOnChangeDescription,
    handleClick,
    handleClickAssingTo,
    handleOnChangeName,
    handleOnChangeDate,
    handleClickAway

  };
};

export default useCreateTask

