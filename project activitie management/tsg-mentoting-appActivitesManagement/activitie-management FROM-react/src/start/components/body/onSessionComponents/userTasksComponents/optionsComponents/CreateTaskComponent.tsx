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
  const [taskName, setTaskName] = useState("");
  const [valueDataTime, setvalueDataTime] = useState(
    new Date().toISOString().split(".")[0]
  );
  const [priority, setPriority] = useState<"medium" | "low" | "high">("medium");
  const [descriptionTask, setDescriptionTask] = useState("Sin description");
  const [primaryAssing, setPrimaryAssing] = useState<string>(
    "-------------------"
  );

  const [open, setOpen] = useState(false);
  const [openAssingTo, setOpenAssingTo] = useState(false);
  const [primaryAssingId, setPrimaryAssingId] = useState<number>(0);
  const [openPriority, setOpenPriority] = useState(false);

  const [backGroundColor, setBackGroundColor] = useState("#2196f3");

  const { sendRequestNewTask, requestNewTask } = useStore();

  const [validate, setValidateButton] = useState<boolean>(false);

  const [alert, setAlert] = useState<boolean>(false);
  //<Alert severity="success">This is a success Alert.</Alert>
  // <Alert severity="info">This is an info Alert.</Alert>|
  // <Alert severity="warning">This is a warning Alert.</Alert>|
  // <Alert severity="error">This is an error Alert.</Alert>

  const fxVlidate = () => 
    {
    console.log(descriptionTask.length);
    console.log(descriptionTask);
    
    (taskName.length > 0 && priority.length > 0 && descriptionTask.length >= 1 && primaryAssingId > 0) ? setValidateButton(true) : setAlert(true);

    console.log(validate);
    

  };

  const createTask = () => {
    task.name = taskName;
    task.expirationDate = new Date(valueDataTime);
    task.priority = priority;
    task.description = descriptionTask;
    task.assignedto = primaryAssingId;

    validate && sendRequestNewTask(task);

    //console.log(requestNewTask);
  };

  const handleOnChangeDescription = (event) => {
    
    setDescriptionTask(event.target.value);
    setAlert(false);
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
 

    setTaskName(event.target.value.trim());
    setAlert(false);
  };

  const handleOnChangeDate = (event) => {
    
    setvalueDataTime(event.target.value);
    setAlert(false);
  };

  const handleClickAway = () => {
    setOpen(false);
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
                  
                  value={descriptionTask}
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
                        { id: 0, name: "--------------------" },
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
                              border: 1,
                              borderRadius: 10,
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
                    </Collapse>
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
              sx={{ marginBottom: 2, display:!alert ? "" : "none" }}
              onClick={() => {
                console.log("entre init", validate);

                fxVlidate();
                
                console.log("validé", validate);

                validate
                  ? (() => {
                      console.log("entre");
                      createTask();                     
                    })()
                  : (() => {
                      console.log("entre al no");
                      //console.log(taskName.length);
                      // console.log("*" + valueDataTime);
                      // console.log(
                      //   "**" + new Date().toISOString().split(".")[0]
                      // );
                      //console.log(priority.length);
                      //console.log(descriptionTask.length);
                      // console.log(primaryAssing.length);
                      // console.log(primaryAssingId);
                      //console.log(validate);
                      setAlert(true);
                    })();
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
