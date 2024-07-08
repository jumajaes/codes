import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Assignment, TaskAlt } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CardContent,
  ClickAwayListener,
  TextField,
  Typography,
} from "@mui/material";
import task from "../../../../../store/task.ts";
import { useStore } from "../../../../../store/context.ts";

export const CreateTaskComponent = () => {

  const [taskName, setTaskName] = useState<string>("");
  const [valueDataTime, setvalueDataTime] = useState<Date>(new Date());//.toISOString().split(".")[0]
  const [priority, setPriority] = useState<"medium" | "low" | "high">("medium");
  const [descriptionTask, setDescriptionTask] = useState<string>("");
  const [primaryAssing, setPrimaryAssing] = useState<string>("-------------------");
  const [primaryAssingId, setPrimaryAssingId] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const [openAssingTo, setOpenAssingTo] = useState(false);
  // const [openPriority, setOpenPriority] = useState(false);

  const [backGroundColor, setBackGroundColor] = useState("#2196f3");
  const { sendRequestNewTask } = useStore();
  const [validate, setValidateButton] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  //<Alert severity="success">This is a success Alert.</Alert>
  // <Alert severity="info">This is an info Alert.</Alert>|
  // <Alert severity="warning">This is a warning Alert.</Alert>|
  // <Alert severity="error">This is an error Alert.</Alert>

  const fxVlidate = () => {
    
    (taskName.length !== 0 &&
      priority.length !== 0 &&
      descriptionTask.length !== 0 &&
      primaryAssingId !== 0) ?
      setValidateButton(true) : setAlert(true);

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

  const handleClickAway = () => {
    setOpen(false);
  };


  // const handleClickAwayAssingTo = () => {
  //   setOpenAssingTo(false);
  // };

  useEffect(() => {

    const handleClickAwayPriority = () => {
      priority === "medium"
        ? setBackGroundColor("#2196f3")
        : priority === "high"
          ? setBackGroundColor("#ffc107")
          : setBackGroundColor("#9E9E9E");
    };

    const createTask = () => {

      const newTask: typeof task = task;
      newTask.name=taskName;
      newTask.description=descriptionTask;
      newTask.expirationDate=valueDataTime;
      newTask.priority=priority;
      newTask.assignedto=primaryAssingId
      
      // console.log(newTask.name)
      // console.log(newTask.expirationDate)
      // console.log(newTask.priority)
      // console.log(newTask.description)
      // console.log(newTask.assignedto)
      // console.log(newTask.description)

      validate
        ? (() => {
          validate && sendRequestNewTask(newTask );
          setValidateButton(false);
        })()
        :
        setAlert(true);

    };

    handleClickAwayPriority();

    validate && createTask();

  }, [descriptionTask, primaryAssing, primaryAssingId, priority, sendRequestNewTask, taskName, validate, valueDataTime]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav">
        <ListItemButton onClick={handleClick}>
          <TaskAlt />
          <ListItemText primary="Create New Task" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          sx={{
            position: "absolute",
            top: "120%",
            left: "-20%",
            zIndex: 1,
            borderRadius: 10,
            border: 2,
            borderColor: "black",
            backgroundColor: "white",
          }}
        >
          <Box>
            <Box
              sx={{ minWidth: 300, backgroundColor: "white", borderRadius: 10 }}
              justifyContent="center"
              padding={1}
            >
              <Typography
                borderRadius={20}
                sx={{ backgroundColor: "#1976d2" }}
                align="center"
                color="white"
                margin={2}
                marginBottom={1}
                component={"div"}
              >
                New TASK
              </Typography>

              <Box>
                <TextField
                  label="name here..."
                  variant="standard"
                  onChange={handleOnChangeName}
                  required
                  sx={{ minWidth: "250px", maxWidth: "250px" }}
                />
              </Box>
              <CardContent>
                <Box>
                  <TextField
                    label="Expiration Date:"
                    type="datetime-local"
                    variant="standard"
                    sx={{ minWidth: "250px", maxWidth: "250px" }}
                    onChange={handleOnChangeDate}
                    value={valueDataTime.toISOString().split(".")[0]}
                    required
                  />
                </Box>

                {/* <ClickAwayListener onClickAway={handleClickPriority}> */}
                <Box
                  padding={1}
                  borderRadius={7}
                  sx={{
                    backgroundColor: "#1976d2",
                    marginTop: 2,
                    marginBottom: 2,
                  }}
                >
                  <Typography

                    sx={{ backgroundColor: "#1976d2" }}
                    align="left"
                    color="white"
                    margin={1}
                    fontSize={12}
                  >
                    Priority...
                  </Typography>
                  <ListItemButton
                    // onClick={handleClickPriority}
                    sx={{ borderRadius: "15px" }}
                  >
                    <ListItemText
                      primary={priority}
                      sx={{
                        backgroundColor: backGroundColor,
                        padding: 1,
                        borderRadius: "15px",
                      }}
                    />

                  </ListItemButton>
                  <Box
                    sx={{

                      backgroundColor: "#00ACC1",
                      borderRadius: "15px",
                    }}
                  >
                    <Button
                      sx={{ borderRadius: 10 }}
                      variant={priority === "high" ? "contained" : "text"}
                      onClick={() => {
                        setPriority("high");
                      }}
                    >
                      HIGH
                    </Button>
                    <Button
                      sx={{ borderRadius: 10 }}
                      variant={priority === "medium" ? "contained" : "text"}
                      onClick={() => {
                        setPriority("medium");

                      }}
                    >
                      MEDIUM
                    </Button>
                    <Button
                      sx={{ borderRadius: 10 }}
                      variant={priority === "low" ? "contained" : "text"}
                      onClick={() => {
                        setPriority("low");
                        ;
                      }}
                    >
                      LOW
                    </Button>
                  </Box>
                </Box>
                {/* </ClickAwayListener> */}

                <TextField
                  required
                  label="Description..."
                  multiline
                  minRows={6}
                  sx={{ minWidth: "220px", maxWidth: "220px" }}
                  onChange={handleOnChangeDescription}

                  value={descriptionTask}
                />

                <ClickAwayListener onClickAway={() => { openAssingTo && setOpenAssingTo(false) }}>
                  <Box
                    padding={1}
                    borderRadius={6}
                    sx={{
                      backgroundColor: "#1976d2", 
                      marginTop: 2,
                      padding: 1, justifyContent: "center"

                    }}
                  >
                    Assing To:

                    <ListItemButton
                      onClick={handleClickAssingTo}
                      sx={{ borderRadius: "15px", justifyContent: "space-between" }}

                    >

                      {primaryAssing}
                      <Box fontSize={20}>{openAssingTo ? "⬆" : "⬇"}</Box>

                    </ListItemButton>

                    <Box
                      display={openAssingTo ? "flex" : "none"}
                      position={"absolute"}
                      flexDirection={"column"}
                      overflow={"scroll"}
                      sx={{
                        top: "88%",
                        left: "9%",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        border: 5,
                        borderColor: "#1976d2",
                        minWidth: "240px",
                        maxWidth: "250px",
                        maxHeight: "240px",
                        zIndex: 1,
                        justifyContent: "center",
                        padding: 1,
                        paddingTop: 11
                      }}
                    >
                      {[
                        { id: 0, name: "-------------------" },
                        { id: 1, name: "Juan Manuel Jramillo Espinosa" },
                        { id: 2, name: "Elpepe" },
                        { id: 3, name: "jasinto" },
                        { id: 4, name: "Tyrone" },
                        { id: 5, name: "Mau" },
                      ].map((option, i) => {

                        return (

                          <Button
                            key={i}
                            sx={{
                              padding: 1,
                              border: 1,
                              margin: 1,
                              display: option.name === primaryAssing ? "none" : "flex",
                              
                              direction: "colum",
                              justifyContent: "center"
                            }}
                            onClick={() => {
                              setPrimaryAssing(option.name);
                              setPrimaryAssingId(option.id);
                              setOpenAssingTo(!openAssingTo);
                            }}
                          >
                            {option.name}

                          </Button>
                        );
                      })}
                    </Box>

                  </Box>
                </ClickAwayListener>
              </CardContent>
            </Box>
            <Box display={alert ? "flex" : "none"} margin={2}>
              <Alert severity="error">Todos los campos son obligatorios.</Alert>
            </Box>
            <Button

              endIcon={<Assignment sx={{ fontSize: 10 }} />}
              size="large"
              variant="contained"
              sx={{ marginBottom: 2, display: !alert ? "" : "none" }}
              onClick={() => {
                fxVlidate();
              }}
            >
              Crear
            </Button>
          </Box>
        </Collapse>
      </List>
    </ClickAwayListener>
  );
};
