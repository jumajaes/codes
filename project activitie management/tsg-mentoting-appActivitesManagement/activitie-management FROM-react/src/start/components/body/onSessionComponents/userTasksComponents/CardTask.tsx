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
  CardHeader,
  ClickAwayListener,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import { useState } from "react";

export const CardTask = ({
  id,
  title,
  descriptión,
  expirationDate,
  priority,
  state,
  assingto,
}) => {
  type ColorState =
    | "primary"
    | "success"
    | "error"
    | "secondary"
    | "info"
    | "warning";

  // const handleOnChangeDescription = (event) => {
  //   setDescription(event.target.value);
  //   console.log(descriptionTask);
  // };

  const [titleTask, setTitle] = useState(title);
  const [descriptionTask, setDescription] = useState(descriptión);
  const [expirationDateTask, setExpirationDate] = useState(expirationDate);
  const [priorityTask, setPriority] = useState(priority);
  const [stateTask, setState] = useState(state);
  const [assignToTask, setAssignTo] = useState(assingto);
  const [idTask, setIdTask] = useState(id);

  const [open, setOpen] = useState(false);
  const [colorState, setColorState] = useState<ColorState>("primary");
  const [colorFondo, setColorFondo] = useState("#1976d2");
  const [backGroundColor, setBackGroundColor] = useState("#2196f3");

  useEffect(() => {
    stateTask === "active" && setColorState("primary");
    stateTask === "completed" && setColorState("success");
    stateTask === "canceled" && setColorState("error");
    stateTask === "expirated" && setColorState("warning");

    stateTask === "active" && setColorFondo("#1976d2");
    stateTask === "completed" && setColorFondo("#2e7d32");
    stateTask === "canceled" && setColorFondo("#d32f2f");
    stateTask === "expirated" && setColorFondo("#f57c00");

    priorityTask === "medium"
      ? setBackGroundColor("#2196f3")
      : priorityTask === "high"
        ? setBackGroundColor("#ffc107")
        : setBackGroundColor("#9E9E9E");

  }, [stateTask, priorityTask, colorState]);

  const handleClickAway = () => {
    setOpen(false);
  };

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
              title="Change Task State"
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
                  {state === "active" ?
                    <Task />
                    : state === "completed" ?
                      <TaskAlt />
                      : state === "canceled" ?
                        <Cancel />
                        :
                        state === "expirated" && <PriorityHigh />
                  }
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
                aria-label="ACTIVE"
                color="primary"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>Active</Typography>
                  <Task />
                </Box>
              </IconButton>
              <IconButton
                aria-label="COMPLETE"
                color="success"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>Completed</Typography>
                  <TaskAlt />
                </Box>
              </IconButton>
              <IconButton
                aria-label="CANCEL"
                color="error"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>Canceled</Typography>
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
                  onClick={() => { }}
                >
                  <Box

                    display="flex"
                    padding={1}
                  >
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
                  onClick={() => { }}
                >
                  <Box

                    display="flex"
                    padding={1}
                  >
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
            <Typography variant="h6" color="white" align="left" fontSize={13}>
              Name:
            </Typography>
            <Typography variant="h4" color="white">
              {titleTask}
            </Typography>
          </Box>
        }
        subheader={
          <Box>
            <hr />
            <Typography variant="h6" fontSize={14} align="left">
              ID Task:
            </Typography>
            {idTask}
            <Typography variant="subtitle2" fontSize={12} align="left">
              Expiration Date:
            </Typography>
            {expirationDateTask}
            <hr />
            <Typography
              variant="h6"
              align="center"
              color="white"
              fontSize={20}
              borderRadius={"15px"}
              padding={1}
              sx={{ backgroundColor: colorFondo }}
            >
              <Typography variant="h6" align="left" fontSize={12}>
                ASSINGNED TO:
              </Typography>
              {assignToTask}
            </Typography>
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
          sx={{ margin: "5px", minWidth: "230px", zIndex: 0, color: "blue"}}
        />

      </Box>
    </Card>
  );
};