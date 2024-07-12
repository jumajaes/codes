/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  TaskAlt,
  Cancel,
  BorderColor,
  DeleteForever,
  Task,
  PriorityHigh
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  ClickAwayListener,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCreateTask } from "./hooks/useUserTask.ts";

export const CardTask = ({
  id,
  title,
  descriptión,
  expirationDate,
  priority,
  state,
  assingto,
}) => {
  const {
    titleTask,
    descriptionTask, 
    expirationDateTask, 
    priorityTask, 
    stateTask, setState,
    assignToTask, 
    idTask, 
    open, setOpen,
    colorState, setColorState,
    colorFondo, setColorFondo,
    backGroundColor, setBackGroundColor,
    iconState, setIconState,
  
    handleClickAway
  } = useCreateTask(
    id,
    title,
    descriptión,
    expirationDate,
    priority,
    state,
    assingto,
  )

  useEffect(() => {
    
   ( stateTask === "active" && new Date() > new Date(expirationDateTask)) && setState("expirated");

    stateTask === "active" &&
      (() => {
        setColorState("primary");
        setColorFondo("#e1e7f8");
        setIconState(<Task/>);
      })();
    stateTask === "completed" &&
      (() => {
        setColorState("success");
        setColorFondo("#dce9db");
        setIconState(<TaskAlt/>);
      })();
    stateTask === "canceled" &&
      (() => {
        setColorState("error");
        setColorFondo("#ffdfd9");
        setIconState(<Cancel/>);
      })();
    stateTask === "expirated" &&
      (() => {
        setColorState("warning");
        setColorFondo("#ffe9d7");
        setIconState(<PriorityHigh/>);
      })();

    priorityTask === "medium"
      ? setBackGroundColor("#2196f3")
      : priorityTask === "high"
        ? setBackGroundColor("#ffc107")
        : setBackGroundColor("#9E9E9E");
  }, [stateTask, priorityTask, expirationDateTask, setBackGroundColor, setColorFondo, setColorState, setIconState, setState]);
    
  return (
    <Card
      sx={{
        maxWidth: 500,
        minWidth: 310,
        boxShadow: 20,
        borderRadius: "25px",
        padding: 2,
      }}
    >
      <Box display={"flex"} justifyContent="center">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box display={"flex"} justifyContent="space-between">
            <Tooltip
              title={stateTask === "expirated" ? "Edit to task to change expiration date":"Change Task State"}
              arrow
              children={
                <Button
                  variant={open ? "text" : "contained"}
                  color={colorState}
                  sx={{
                    borderRadius: "25px",
                    padding: "5px",
                    margin: "10px",
                    minWidth: "120px",
                  }}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  {stateTask}
                  {iconState}
                </Button>
              }
            />
            <Box
              display={open ? "flex-box" : "none"}
              position={"absolute"}
              minWidth={250}
              maxWidth={255}
              sx={{
                backgroundColor: "white",
                zIndex: 1,
                border: 1,
                borderRadius: "15px",
                justifyContent: "space-around",
              }}
            >
              <IconButton
                aria-label="active"
                color="primary"
                onClick={() => {
                  setOpen(!open);
                  setState("active")
                }}
              >
                <Box
                  border={1}
                  borderRadius={"25px"}
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
                  setOpen(!open);
                  setState("completed")
                }}
              >
                <Box
                  border={1}
                  borderRadius={"25px"}
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
                  setOpen(!open);
                  setState("canceled")
                }}
              >
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>canceled</Typography>
                  <Cancel />
                </Box>
              </IconButton>
            </Box>
            <Tooltip
              title="Delete task"
              arrow
              children={
                <IconButton
                  aria-label="DELETE"
                  color="warning"
                  onClick={() => {}}
                >
                  <Box display="flex" padding={1}>
                    <DeleteForever />
                  </Box>
                </IconButton>
              }
            />

            <Tooltip
              title="Edit task"
              arrow
              children={
                <IconButton
                  aria-label="EDIT"
                  color="secondary"
                  onClick={() => {}}
                >
                  <Box display="flex" padding={1}>
                    <BorderColor />
                  </Box>
                </IconButton>
              }
            />
          </Box>
        </ClickAwayListener>
      </Box>
      <hr />
      {
        //------------------------------------------------------------------------------------------------------------------
      }
      <CardHeader
        align="center"
        title={
          <Box
            display={"flex-box"}
            fontSize={20}
            borderRadius={"15px"}
            padding={1}
            marginBottom={1}
            sx={{ backgroundColor: colorFondo }}
          >
            <Typography variant="h6" align="left" fontSize={13}>
              Name:
            </Typography>
            <Typography variant="h4" >
              {titleTask}
            </Typography>
          </Box>
        }
        subheader={
          <Box>
            <hr />
            <Typography variant="h6" fontSize={14} align="center" margin={2}>
              ID Task: {idTask}
            </Typography>
            <TextField
                    label="Expiration Date:"
                    type="datetime-local"
                    
                    sx={{ minWidth: "250px", maxWidth: "250px", zIndex:0 }}
                    value={new Date(expirationDate).toISOString().split(".")[0]}
                    disabled
                  />
           
            <Box
              marginTop={2}
              borderRadius={"15px"}
              padding={1}
              sx={{ backgroundColor: colorFondo }}
            >
              <Typography align="left" fontSize={12}>
                ASSINGNED TO:
              </Typography>
              {assignToTask}
            </Box>
            <hr />
          </Box>
        }
      />
      <Box
        border={2}
        borderRadius={"15px"}
        color="text.secondary"
        padding={1}
        margin={1}
      >
        <Typography
          variant="h6"
          align="left"
          fontSize={15}
          borderRadius={"15px"}
        >
          Priority...
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="white"
          fontSize={20}
          borderRadius={"25px"}
          sx={{ backgroundColor: backGroundColor }}
        >
          {priorityTask}
        </Typography>
        <hr />

        <TextField
          disabled
          label="Description..."
          multiline={true}
          maxRows={6}
          variant="filled"
          value={descriptionTask}
          // onChange={handleOnChangeDescription}
          sx={{ margin: "5px", minWidth: "230px", zIndex: 0, color: "blue" }}
        />
      </Box>
    </Card>
  );
};
