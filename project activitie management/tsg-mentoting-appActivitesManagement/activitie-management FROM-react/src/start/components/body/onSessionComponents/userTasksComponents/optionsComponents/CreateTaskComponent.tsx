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

import { useStore } from "../../../../../../store/context.ts";
import { task } from "../../../../../../store/task.ts";

export const CreateTaskComponent = () => {

  const [taskName, setTaskName] = useState("")
  const [valueDataTime, setvalueDataTime] = useState(new Date().toISOString().split(".")[0]);
  const [priority, setPriority] = useState<"medium" | "low" | "high">("medium");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [primaryAssing, setPrimaryAssing] = useState("0");

  const [open, setOpen] = useState(false);
  const [openAssingTo, setOpenAssingTo] = useState(false);
  const [primaryAssingId, setPrimaryAssingId] = useState(0);
  const [openPriority, setOpenPriority] = useState(false);

  const [backGroundColor, setBackGroundColor] = useState("#2196f3");

  const { sendRequestNewTask, requestNewTask } = useStore();

  const [validate, setValidateButton] = useState(false);

  const [alert, setAlert] = useState<boolean>(false)
  //<Alert severity="success">This is a success Alert.</Alert>
  // <Alert severity="info">This is an info Alert.</Alert>|
  // <Alert severity="warning">This is a warning Alert.</Alert>|
  // <Alert severity="error">This is an error Alert.</Alert>

  const fxVlidate = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    taskName.length > 0 ?
      (priority.length > 0 ?
        descriptionTask.length > 0 :
        (primaryAssingId > 0 ? setValidateButton(true) : setAlert(true))
      )
      : setAlert(true)
  }


  const createTask = () => {

    //console.log(taskName);
    console.log("*" + valueDataTime);
    console.log("**" + new Date().toISOString().split(".")[0]);
    // console.log(priority);
    // console.log(descriptionTask);
    // console.log(primaryAssing);
    console.log(validate);

    task.name = taskName
    task.expirationDate = new Date(valueDataTime)
    task.priority = priority
    task.description = descriptionTask
    task.assignedto = primaryAssingId


    console.log(task)

    sendRequestNewTask(task)
    console.log(requestNewTask)



  };

  const handleOnChangeDescription = (event) => {
    console.log("Click descrip");
    console.log(event.target.value);
    setDescriptionTask(event.target.value);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickPriority = () => {
    setOpenPriority(true);
    setAlert(false);
  };

  const handleClickAssingTo = () => {
    setOpenAssingTo(!openAssingTo);
    setAlert(false);
  };

  const handleOnChangeName = (event) => {

    console.log("Click name");
    console.log(event.target.value);

    setTaskName(event.target.value.trim());
    setAlert(false);
  };

  const handleOnChangeDate = (event) => {
    console.log("Click date");
    console.log(event.target.value);
    setvalueDataTime(event.target.value);
    setAlert(false);
  };

  const handleClickAway = () => {
    setOpen(false);
    setAlert(false);
  };

  const handleClickAwayPriority = () => {
    setOpenPriority(false);
    

  };

  const handleClickAwayAssingTo = () => {
    setOpenAssingTo(false);
    
  };

  useEffect(() => {
    priority === "medium"
      ? setBackGroundColor("#2196f3")
      : priority === "high"
        ? setBackGroundColor("#ffc107")
        : setBackGroundColor("#9E9E9E");

    //console.log( new Date().toISOString())

  }, [priority]);

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
                  sx={{ minWidth: "210px", maxWidth: "210px" }}
                />
              </Box>
              <CardContent>
                <Box>
                  <TextField
                    label="Expiration Date:"
                    type="datetime-local"
                    variant="standard"
                    sx={{ minWidth: "210px", maxWidth: "210px" }}
                    onChange={handleOnChangeDate}
                    value={valueDataTime}
                    required
                  />
                </Box>

                <ClickAwayListener onClickAway={handleClickAwayPriority}>
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
                      borderRadius={20}
                      sx={{ backgroundColor: "#1976d2" }}
                      align="left"
                      color="white"
                      margin={1}
                      fontSize={12}
                    >
                      Priority...
                    </Typography>
                    <ListItemButton
                      onClick={handleClickPriority}
                      sx={{ borderRadius: "25px" }}
                    >
                      <ListItemText
                        primary={priority}
                        sx={{
                          backgroundColor: backGroundColor,
                          padding: 1,
                          borderRadius: "15px",
                        }}
                      />
                      {openPriority ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse
                      in={openPriority}
                      sx={{
                        padding: 1,
                        backgroundColor: "#00ACC1",
                        borderRadius: "15px",
                      }}
                    >
                      <Button
                        sx={{ borderRadius: 25 }}
                        variant={priority === "high" ? "contained" : "text"}
                        onClick={() => {
                          setPriority("high");
                          setOpenPriority(false);
                        }}
                      >
                        HIGH
                      </Button>
                      <Button
                        sx={{ borderRadius: 25 }}
                        variant={priority === "medium" ? "contained" : "text"}
                        onClick={() => {
                          setPriority("medium");
                          setOpenPriority(false);
                        }}
                      >
                        MEDIUM
                      </Button>
                      <Button
                        sx={{ borderRadius: 25 }}
                        variant={priority === "low" ? "contained" : "text"}
                        onClick={() => {
                          setPriority("low");
                          setOpenPriority(false);
                        }}
                      >
                        LOW
                      </Button>
                    </Collapse>
                  </Box>
                </ClickAwayListener>

                <TextField
                  required
                  label="Description..."
                  multiline
                  minRows={6}
                  sx={{ minWidth: "220px", maxWidth: "220px" }}
                  onChange={handleOnChangeDescription}
                />

                <ClickAwayListener onClickAway={handleClickAwayAssingTo}>
                  <Box
                    padding={1}
                    borderRadius={7}
                    sx={{
                      backgroundColor: "#1976d2",
                      marginTop: 2,
                    }}
                  >
                    Assing To:
                    <ListItemButton
                      onClick={handleClickAssingTo}
                      sx={{ borderRadius: "25px" }}
                    >
                      <ListItemText
                        sx={{
                          borderRadius: "15px",
                          backgroundColor: "#00ACC1",
                          padding: 1,
                        }}
                        primary={primaryAssing}
                      />
                      {openAssingTo ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse
                      in={openAssingTo}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "15px",
                      }}
                    >
                      {[
                        ["0","--------------------"],
                        ["1", "Juan Manuel Jramillo Espinosa"],
                        ["2", "Elpepe"],
                        ["3", "jasinto"],
                        ["4", "Tyrone"],
                        ["5", "Mau"],
                      ].map((option, i) => {
                        return (
                          <Button
                            key={i}
                            sx={{
                              border: 1,
                              borderRadius: 10,
                            }}
                            onClick={() => {
                              setPrimaryAssing(option[1]);
                              setPrimaryAssingId(parseInt(option[0]))
                              setOpenAssingTo(!openAssingTo);
                            }}
                          >
                            {option[1]}
                          </Button>
                        );
                      })}
                    </Collapse>
                  </Box>
                </ClickAwayListener>
              </CardContent>
            </Box>
            <Button
              type="submit"
              endIcon={<Assignment sx={{ fontSize: 10 }} />}
              size="large"
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={() => {
                fxVlidate()
                validate ? (() => {
                  setOpen(false);
                  createTask()
                  setAlert(false)
                })(): setAlert(true)
              }
              }
            >
              Crear
            </Button>

            <Box display={alert ? "flex" : "none" }>
              <Alert severity="error">Todos los campos son obligatorios.</Alert>
            </Box>
          </Box>
        </Collapse>
      </List>
    </ClickAwayListener>
  );
};