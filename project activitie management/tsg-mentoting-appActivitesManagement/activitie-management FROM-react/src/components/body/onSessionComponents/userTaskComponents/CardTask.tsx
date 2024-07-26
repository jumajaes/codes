/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  TaskAlt,
  Cancel,
  BorderColor,
  Task,
  PriorityHigh,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  ClickAwayListener,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCardTask } from "./hooks/useCardTask.ts";
import useCreateTask from "../optionsComponents/hooks/useCreateTask.ts";
import task from "../../../../store/task.ts";
import { useStore } from "../../../../store/context.ts";

export const CardTask = ({
  id,
  name,
  description,
  expirationdate,
  priority,
  state,
  assignedto,
}) => {
  const {
    titleTask,
    descriptionTaskCard,
    expirationDateTask,
    priorityCardTask,
    stateTask,
    setState,
    assignToTask,
    idTask,
    openCardTask,
    setOpenCardTask,
    colorState,
    setColorState,
    colorFondo,
    setColorFondo,
    backGroundColor,
    setBackGroundColor,
    iconState,
    setIconState,
    handleClickAway,
    setTitle,
    setExpirationDate,
    setPriorityCardTask,
    setAssignTo,
    setDescriptionCard,
    setIdTask,
  } = useCardTask({
    id,
    name,
    description,
    expirationdate,
    priority,
    state,
    assignedto,
  });

  const { setStateCreate, setTaskToEdit, setEdit, setAlertName, setOpen } =
    useCreateTask();

  const { sendNewState, editStore } = useStore();

  useEffect(() => {
    setTitle(name);
    setExpirationDate(expirationdate);
    setPriorityCardTask(priority);
    setAssignTo(assignedto);
    setDescriptionCard(description);
    setIdTask(id);
    setStateCreate(state);

    stateTask === "active" &&
      new Date(expirationDateTask.split(".")[0]) < new Date() &&
      setState("expirated");

    (stateTask === "active" || stateTask === "") &&
      (() => {
        setColorState("primary");
        setColorFondo("#e1e7f8");
        setIconState(<Task />);
      })();
    stateTask === "completed" &&
      (() => {
        setColorState("success");
        setColorFondo("#AADDA5");
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

    priorityCardTask === "medium"
      ? setBackGroundColor("#2196f3")
      : priorityCardTask === "high"
      ? setBackGroundColor("#ffc107")
      : setBackGroundColor("#9E9E9E");
  }, [
    assignedto,
    description,
    expirationDateTask,
    expirationdate,
    id,
    name,
    priority,
    priorityCardTask,
    setAssignTo,
    setBackGroundColor,
    setColorFondo,
    setColorState,
    setDescriptionCard,
    setExpirationDate,
    setIconState,
    setIdTask,
    setPriorityCardTask,
    setState,
    setStateCreate,
    setTitle,
    state,
    stateTask,
    sendNewState,
    setEdit,
    editStore,
  ]);

  return (
    <Card
      sx={{
        maxWidth: 500,
        minWidth: 310,
        maxHeight: 625,
        boxShadow: 5,
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <Box display={"flex"} justifyContent="center">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box display={"flex"} justifyContent="flex-start">
            <Tooltip
              title={
                stateTask === "expirated"
                  ? "Edit to task and change to expiration date"
                  : "Change Task State"
              }
              arrow
              children={
                <Button
                  color={colorState}
                  sx={{
                    borderRadius: "10px",
                    padding: "1px",
                    margin: "10px",
                    minWidth: "100px",
                    textTransform: "capitalize",
                    fontSize: "15px",
                  }}
                  variant={openCardTask ? "text" : "contained"}
                  onClick={() => {
                    setOpenCardTask(true);
                  }}
                >
                  {stateTask}
                </Button>
              }
            />
            <Box
              display={openCardTask ? "flex" : "none"}
              position={"absolute"}
              minWidth={100}
              sx={{
                flexDirection: "column",
                top: "45%",
                backgroundColor: "white",
                zIndex: 2,
                border: 1,
                borderRadius: "10px",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                aria-label="active"
                color="primary"
                onClick={() => {
                  setOpenCardTask(!openCardTask);
                  setState("active");
                  // taskToEdit.state = "active"
                  sendNewState(id, "active");
                }}
              >
                <Box
                  border={1}
                  borderRadius={"10px"}
                  display="flex"
                  padding={1}
                  minWidth={"60px"}
                >
                  <Typography
                    sx={{ textTransform: "capitalize", fontSize: "15px" }}
                  >
                    active
                  </Typography>
                </Box>
              </IconButton>
              <IconButton
                aria-label="completed"
                color="success"
                onClick={() => {
                  setOpenCardTask(!openCardTask);
                  setState("completed");
                  // taskToEdit.state = "completed"
                  sendNewState(id, "completed");
                }}
              >
                <Box
                  border={1}
                  borderRadius={"10px"}
                  display="flex"
                  padding={1}
                >
                  <Typography
                    sx={{ textTransform: "capitalize", fontSize: "15px" }}
                  >
                    completed
                  </Typography>
                  
                </Box>
              </IconButton>
              <IconButton
                aria-label="canceled"
                color="error"
                onClick={() => {
                  setOpenCardTask(!openCardTask);
                  setState("canceled");
                  // taskToEdit.state = "canceled"
                  sendNewState(id, "canceled");
                }}
              >
                <Box
                  border={1}
                  borderRadius={"10px"}
                  display="flex"
                  padding={1}
                >
                  <Typography
                    sx={{ textTransform: "capitalize", fontSize: "15px"}}
                  >
                    canceled
                  </Typography>
                  
                </Box>
              </IconButton>
            </Box>
            <Tooltip
              id="edit"
              title="Edit Task"
              arrow
              children={
                <Button
                  sx={{ zIndex: 1 }}
                  aria-label="EDIT"
                  color="secondary"
                  id="edit"
                  onClick={() => {
                    setOpen(true);
                    const newTask: typeof task = task;
                    newTask.name = name;
                    newTask.id = id;
                    newTask.description = description;
                    newTask.expirationdate = expirationdate;
                    newTask.priority = priority;
                    newTask.assignedto = assignedto;
                    newTask.state = stateTask;
                    newTask.isEdit = true;
                    console.log(newTask);
                    setTaskToEdit(newTask);

                  }}
                >
                  <Box id="edit" display="flex" padding={1}>
                    <BorderColor sx={{ zIndex: 0 }} color="primary" />
                  </Box>
                </Button>
              }
            />

            {/* <Tooltip
              title="Delete task"
              arrow
              children={
                <Button
                  aria-label="Delete task"
                  color="warning"
                  onClick={() => {}}
                >
                  <Box display="flex" padding={1}>
                    <DeleteForever />
                  </Box>
                </Button>
              }
            /> */}
          </Box>
        </ClickAwayListener>
      </Box>

      {
        //------------------------------------------------------------------------------------------------------------------
      }
      <Box sx={{ maxWidth: "265px", minWidth: "265px" }}>
        <hr />
        <Typography variant="h6" align="left" fontSize={13}>
          Name:
        </Typography>
        <Typography
          overflow={"auto"}
          align="center"
          maxWidth={290}
          height={30}
          fontSize={13}
        >
          {titleTask}
        </Typography>

        <Box
          sx={{
            borderRadius: "10px",
            marginBottom: 2,
          }}
        >
          <hr />
          <Typography variant="h6" fontSize={13}>
            ID Task: {idTask}
          </Typography>
          <Typography variant="h6" align="left" fontSize={13}>
            Expiration Date:
          </Typography>
          <TextField
            type="datetime-local"
            sx={{
              fontSize: 13,
              minWidth: "250px",
              zIndex: 0,
              backgroundColor: colorFondo,
            }}
            value={expirationDateTask.split(".")[0]}
            disabled
          />
          <Typography variant="h6" align="left" marginTop={1} fontSize={13}>
            Assingned to:
          </Typography>
          <Typography
            fontSize={13}
            overflow={"auto"}
            align="center"
            color={"black"}
            sx={{ textTransform: "capitalize" }}
            height={40}
          >
            {assignToTask}
          </Typography>
          <hr style={{ margin: 0 }} />
        </Box>
      </Box>
      <Box
        display={"block"}
        borderRadius={"10px"}
        color="black"
        justifyItems={"center"}
        width="270px"
      >
        <Typography variant="h6" align="left" fontSize={13}>
          Priority:
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="white"
          fontSize={13}
          borderRadius={"10px"}
          sx={{
            backgroundColor: backGroundColor,
            textTransform: "capitalize",
            fontSize: "15px",
          }}
        >
          {priorityCardTask}
        </Typography>
        <hr />
        <Typography variant="h6" align="left" fontSize={13}>
          Description:
        </Typography>
        <TextField
          disabled
          multiline={true}
          maxRows={5}
          minRows={5}
          value={descriptionTaskCard}
          sx={{
            margin: "1px",
            maxWidth: "270px",
            minWidth: "270px",
            zIndex: 0,
            marginTop: 1,
          }}
        />
      </Box>
    </Card>
  );
};
