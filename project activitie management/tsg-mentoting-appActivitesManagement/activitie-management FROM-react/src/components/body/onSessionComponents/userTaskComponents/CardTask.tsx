/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  TaskAlt,
  Cancel,
  BorderColor,
  DeleteForever,
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

export const CardTask = ({
  id,
  name,
  description,
  expirationdate,
  priority,
  state,
  assignedto
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
    setTitle, setExpirationDate, setPriorityCardTask, setAssignTo,setDescriptionCard,setIdTask
  } = useCardTask({
    id,
    name,
    description,
    expirationdate,
    priority,
    state,
    assignedto
  });

  const {  setOpen, setTaskName, setvalueDataTime, setDescriptionTask, setPrimaryAssing, setEditId, setPriority, priorityCreate,taskName,valueDataTime,descriptionTask,primaryAssing,editId } = useCreateTask();

  useEffect(() => {

    setTitle(name)
     setExpirationDate(expirationdate) 
     setPriorityCardTask(priority)
      setAssignTo(assignedto)
      setDescriptionCard(description) 
      setIdTask(id)

    stateTask === "active" &&
      new Date(expirationDateTask.split(".")[0]) < new Date() &&
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

    priorityCardTask === "medium"
      ? setBackGroundColor("#2196f3")
      : priorityCardTask === "high"
        ? setBackGroundColor("#ffc107")
        : setBackGroundColor("#9E9E9E");
  }, [priorityCardTask, stateTask]);

  return (
    <Card
      sx={{
        maxWidth: 500,
        minWidth: 310,
        boxShadow: 20,
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <Box display={"flex"} justifyContent="center" maxWidth={"315px"}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box display={"flex"} justifyContent="space-between">
            <Tooltip
              title={
                stateTask === "expirated"
                  ? "Edit to task and change to expiration date"
                  : "Change Task State"
              }
              arrow
              children={
                <Button
                  variant={openCardTask ? "text" : "contained"}
                  color={colorState}
                  sx={{
                    borderRadius: "10px",
                    padding: "5px",
                    margin: "10px",
                    minWidth: "120px",
                  }}
                  onClick={() => {
                    setOpenCardTask(true);
                  }}
                >
                  {stateTask}
                  {iconState}
                </Button>
              }
            />
            <Box
              display={openCardTask ? "flex-box" : "none"}
              position={"absolute"}
              minWidth={250}
              maxWidth={255}
              sx={{
                backgroundColor: "white",
                zIndex: 1,
                border: 1,
                borderRadius: "10px",
                justifyContent: "space-around",
              }}
            >
              <IconButton
                aria-label="active"
                color="primary"
                onClick={() => {
                  setOpenCardTask(!openCardTask);
                  setState("active");
                }}
              >
                <Box
                  border={1}
                  borderRadius={"10px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>active</Typography>
                  <Task />
                </Box>
              </IconButton>
              <IconButton
                aria-label="completed"
                color="success"
                onClick={() => {
                  setOpenCardTask(!openCardTask);
                  setState("completed");
                }}
              >
                <Box
                  border={1}
                  borderRadius={"10px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>completed</Typography>
                  <TaskAlt />
                </Box>
              </IconButton>
              <IconButton
                aria-label="canceled"
                color="error"
                onClick={() => {
                  setOpenCardTask(!openCardTask);
                  setState("canceled");
                }}
              >
                <Box
                  border={1}
                  borderRadius={"10px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>canceled</Typography>
                  <Cancel />
                </Box>
              </IconButton>
            </Box>
            <Tooltip
              id="edit"
              title="Edit Task"
              arrow
              children={<Button 
               
                aria-label="EDIT"
                color="secondary"
                id="edit"
                onClick={() => {
                  setOpen(true)
                  setEditId(id)
                  setPriority(priority)
                  setTaskName(name)
                  setvalueDataTime(expirationdate)
                  setDescriptionTask(description)
                  setPrimaryAssing(assignedto)
                  
                  console.log( id,
                    name,
                    description,
                    expirationdate,
                    priority,
                    state,
                    assignedto)
                }}
              >
                <Box  id="edit" display="flex" padding={1}>
                  <BorderColor  sx={{zIndex:0}}  id="edit" />
                </Box>
              </Button>

              }
            />

            <Tooltip
              title="Delete task"
              arrow
              children={
                <Button
                  aria-label="Delete task"
                  color="warning"
                  onClick={() => { }}
                >
                  <Box display="flex" padding={1}>
                    <DeleteForever />
                  </Box>
                </Button>
              }
            />
          </Box>
        </ClickAwayListener>
      </Box>
      <hr />
      {
        //------------------------------------------------------------------------------------------------------------------
      }
      <Box sx={{ maxWidth: "265px", minWidth: "265px" }}>
        <Typography variant="h6" align="left" fontSize={13}>
          Name...
        </Typography>
        <Typography variant="h5" maxWidth={290} marginBottom={2}>
          {titleTask}
        </Typography>

        <Box
          sx={{
            backgroundColor: colorFondo,
            borderRadius: "10px",
            padding: 1,
            marginBottom: 2,
          }}
        >
          <hr />
          <Typography variant="h6" fontSize={14} margin={1}>
            ID TASK: {idTask}
          </Typography>
          <TextField
            label="Expiration Date:"
            type="datetime-local"
            sx={{ minWidth: "250px", maxWidth: "250px", zIndex: 0 }}
            value={expirationDateTask.split(".")[0]}
            disabled
          />
          <Typography fontSize={10} color={"black"} borderBottom={2} margin={1} maxWidth="75px">
            ASSINGNED TO:
          </Typography>
          <Typography fontSize={15} align="center" color={"black"} margin={1}>
            {assignToTask}
          </Typography>
          <hr />
        </Box>
      </Box>
      <Box
        display={"block"}
        borderRadius={"10px"}
        color="black"
        justifyItems={"center"}
        width="270px"
      >
        <Typography variant="h6" align="left" fontSize={15}>
          Priority...
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="white"
          fontSize={20}
          borderRadius={"10px"}
          sx={{ backgroundColor: backGroundColor }}
        >
          {priorityCardTask}
        </Typography>
        <hr />

        <TextField
          disabled
          label="Description..."
          multiline={true}
          maxRows={5}
          minRows={5}
          value={descriptionTaskCard}
          // onChange={handleOnChangeDescription}
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
