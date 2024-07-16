/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import task from "../../../../../store/task.ts";
import { useStore } from "../../../../../store/context.ts";

export const useCreateTask = () => {

  const [backGroundColor, setBackGroundColor] = useState("#2196f3");
  const [allUsers, setAllUsers] = useState<(typeof task)[]>([]);
  const { sendRequestNewTask, requestNewTask, setRequestNewTask } = useStore();

  const [editId, setEditId] = useState<number>(0);
  const [priorityCreate, setPriorityCreate] = useState<"medium" | "low" | "high" | "">("medium");
  const [taskName, setTaskName] = useState<string>("");
  const [valueDataTime, setvalueDataTime] = useState<string>(new Date().toISOString().split(".")[0]);
  const [descriptionTask, setDescriptionTask] = useState<string>("");
  const [primaryAssing, setPrimaryAssing] = useState<string>("Seleccione un usuario");

  const [openAssingTo, setOpenAssingTo] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertName, setAlertName] = useState<boolean>(false);
  const [successNewTask, setSuccessNewTask] = useState<boolean>(false);

 

  const Users = async () => {
    try {
      const response = await fetch("http://localhost:4000/allUsers"); //"http://192.168.1.38:4000/allUsers"
      setAllUsers(await response.json());
    } catch (error) {
      setAllUsers([]);
    }
  };

  const fxVlidate = () => {
    taskName.length !== 0 &&
    priorityCreate.length !== 0 &&
    descriptionTask.length !== 0 &&
    primaryAssing.length !== 0 &&
    primaryAssing !== "Seleccione un usuario"
      ? () => createTask()
      :(() => {
        console.log("alert todos los datos con obligatorios.")
        setAlert(true);
      })()
  };

  const handleClickPriority = (
    typePriority: "medium" | "low" | "high" | ""
  ) => {
    setPriorityCreate(typePriority);
  };

  const handleOnChangeDescription = (event) => {
    setDescriptionTask(event.target.value);
    setSuccessNewTask(false);
    setAlertName(false);
    setAlert(false);
    setRequestNewTask(false);
  };

  const handleClick = async () => {
    await Users();
    setAlertName(false);
    setAlert(false);
    setOpen(!open)
  };

  const handleClickAssingTo = () => {
    setOpenAssingTo(!openAssingTo);
    setRequestNewTask(false);
    setAlertName(false);
    setAlert(false);
  };

  const handleOnChangeName = (event) => {
    setTaskName(event.target.value.trim());
    setAlertName(false);
    setAlert(false);
  };

  const handleOnChangeDate = (event) => {
    setvalueDataTime(event.target.value);
    setAlertName(false);
    setAlert(false);
  };

  const handleClickAway = (event) => {
    event.target.outerHTML ===
      '<path d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"></path>' ||
    event.target.outerHTML ===
      '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1fxs7k2-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BorderColorIcon" id="edit"><path d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"></path></svg>' ||
    event.target.outerHTML ===
      '<div class="MuiBox-root css-1ckupud" id="edit"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1fxs7k2-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BorderColorIcon" id="edit"><path d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"></path></svg></div>' ||
    event.target.outerHTML ===
      '<button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorSecondary MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorSecondary css-1d3f8j8-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button" aria-label="EDIT" id="edit" data-mui-internal-clone-element="true"><div class="MuiBox-root css-1ckupud" id="edit"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1fxs7k2-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BorderColorIcon" id="edit"><path d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"></path></svg></div><span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"><span class="css-y4cjyz-MuiTouchRipple-ripple MuiTouchRipple-ripple MuiTouchRipple-rippleVisible" style="width: 154.932px; height: 154.932px; top: -70.4661px; left: -72.4661px;"><span class="MuiTouchRipple-child MuiTouchRipple-childLeaving"></span></span></span></button>'
      ? setOpen(true)
      : setOpen(false);
  };

  const createTask = () => {
    const newTask: typeof task = task;
    newTask.name = taskName;
    newTask.description = descriptionTask;
    newTask.expirationdate = valueDataTime;

    newTask.priority = priorityCreate;
    newTask.assignedto = primaryAssing;
    newTask.state = "active";

    sendRequestNewTask(newTask);
    console.log(requestNewTask, "create task");
    requestNewTask
      ? () => {
          console.log("se guardo");
          setOpen(false);
          setSuccessNewTask(true);
        }
      : () => {
          console.log("no se guardo");
          setOpen(true);
          setSuccessNewTask(false);
          setAlertName(true);
         
        };
  };

  return {
    backGroundColor,
    setBackGroundColor,
    priorityCreate,
    setPriorityCreate,
    handleClickPriority,
    taskName,
    setTaskName,
    valueDataTime,
    setvalueDataTime,
    descriptionTask,
    setDescriptionTask,
    primaryAssing,
    setPrimaryAssing,
    editId,
    setEditId,
    open,
    setOpen,
    openAssingTo,
    setOpenAssingTo,
    alert,
    setAlert,
    sendRequestNewTask,
    requestNewTask,
    fxVlidate,
    handleOnChangeDescription,
    handleClick,
    handleClickAssingTo,
    handleOnChangeName,
    handleOnChangeDate,
    handleClickAway,
    alertName,
    setAlertName,
    successNewTask,
    setSuccessNewTask,
    allUsers,
    setRequestNewTask,
  };
};

export default useCreateTask;
