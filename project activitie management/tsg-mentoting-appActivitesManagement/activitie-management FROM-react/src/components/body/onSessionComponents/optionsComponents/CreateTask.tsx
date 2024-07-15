import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";

import { Assignment, TaskAlt } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  ClickAwayListener,
  TextField,
  Typography,
} from "@mui/material";

import { useCreateTask } from "./hooks/useCreateTask.ts";
import React, { useEffect, useState } from "react";
import task from "../../../../store/task.ts";

export const CreateTask = () => {

  const Users = async () => {
    try {
      const response = await fetch("http://localhost:4000/allUsers");
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {
      //console.error("Error al obtener productos:", error);
      setAllUsers([]);
    }
  };

  const [allUsers, setAllUsers] = useState<(typeof task)[]>([]);

  const {
    priority,
    handleClickPriority,
    valueDataTime,
    descriptionTask,
    primaryAssing,
    setPrimaryAssing,
    setPrimaryAssingId,
    open,
    openAssingTo,
    setOpenAssingTo,
    alert,
    fxVlidate,
    handleOnChangeDescription,
    handleClick,
    handleClickAssingTo,
    handleOnChangeName,
    handleOnChangeDate,
    handleClickAway,
    requestNewTask,
    alertName, setAlertName
  } = useCreateTask();

  useEffect(() => {
    Users()
    !requestNewTask && setAlertName(true) 
  }, [priority, requestNewTask, setAlertName])

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav">
        <Button variant={open ? "text" : "outlined"} onClick={handleClick}>
          <TaskAlt />
          <ListItemText primary="Create New Task" />

        </Button>
        <Box
          display={open ? "flex" : "none"}
          flexDirection={"column"}
          sx={{
            overflow: "hidden",
            position: "absolute",
            top: "120%",
            left: "-16%",
            zIndex: 1,
            borderRadius: 10,
            border: 2,
            borderColor: "black",
            backgroundColor: "white",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{ minWidth: 300, maxWidth: 315, backgroundColor: "white", borderRadius: 10 }}
            justifyContent="center"
            padding={1}
            display="flex"
            flexDirection={"column"}
          >
            <Typography
              borderRadius={10}
              sx={{ backgroundColor: "#1976d2" }}
              align="center"
              color="white"
              margin={2}
              marginBottom={1}

            >
              New TASK
            </Typography>
            <TextField
              label="name here..."
              variant="standard"
              onChange={handleOnChangeName}
              required
              sx={{ minWidth: "250px" }}
            />
            <Box display={alertName ? "flex" : "none"} justifyContent={"center"} margin={2}>
            <Alert severity="error">Este nombre ya existe.</Alert>
          </Box>
            <br />

            <TextField
              label="Expiration Date:"
              type="datetime-local"
              variant="standard"
              sx={{ minWidth: "250px" }}
              onChange={handleOnChangeDate}
              value={valueDataTime?.split(".")[0]}
              required
            />

            <ClickAwayListener onClickAway={() => { setOpenAssingTo(false) }}>
              <Box
                padding={1}
                borderRadius="10px"
                sx={{
                  zIndex:2,
                  display: "flex",
                  
                  marginTop: 1,
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              > 
                Assing To
                <Button
                  onClick={handleClickAssingTo}
                  sx={{
                    
                    backgroundColor: "white",
                    borderRadius: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  {primaryAssing} <Typography sx={{fontSize: 20, color: "#1976d2", alignSelf: "center" }}>{openAssingTo ? "*⬆" : "*⬇"}</Typography>
                </Button>

                <Box
                  display={openAssingTo ? "flex" : "none"}
                  position={"absolute"}
                  flexDirection={"column"}
                  overflow={"scroll"}
                  sx={{
                    top: "35%",
                    left: "2%",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    border: 5,
                    borderColor: "#1976d2",
                    minWidth: "285px", 
                    maxWidth: "285px",
                    padding:"10px",
                    maxHeight: "240px",
                    zIndex: 1,
                    justifyContent: "center",
                    
                    paddingTop: 11,
                  }}
                >
                  {allUsers.map((option, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          padding: 1,
                          border: 1,
                          margin: 1,
                          display: option.name === primaryAssing ? "none" : "flex",
                          direction: "colum",
                          justifyContent: "center",
                          cursor: "pointer", // Para que parezca un botón
                          borderRadius:"10px"
                        }}
                        onClick={() => {
                          setPrimaryAssing(option.name);
                          setPrimaryAssingId(option.id);
                          setOpenAssingTo(!openAssingTo);
                        }}
                      >
                        {option.name}
                      </Box>
                    );
                  })}
                </Box>

              </Box>
            </ClickAwayListener>

            <Box
              padding={1}
              borderRadius="10px"
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

              <Box
                sx={{
                  display:"flex",
                  justifyContent:"space-between",
                  backgroundColor: "#00ACC1",
                  borderRadius: "15px",
                }}
              >
                <Button
                  sx={{ borderRadius: 10 }}
                  variant={priority === "high" ? "contained" : "text"}
                  onClick={() => {
                    handleClickPriority("high");
                  }}
                >
                  HIGH
                </Button>
                <Button
                  sx={{ borderRadius: 10 }}
                  variant={priority === "medium" ? "contained" : "text"}
                  onClick={() => {
                    handleClickPriority("medium");
                  }}
                >
                  MEDIUM
                </Button>
                <Button
                  sx={{ borderRadius: 10 }}
                  variant={priority === "low" ? "contained" : "text"}
                  onClick={() => {
                    handleClickPriority("low");
                  }}
                >
                  LOW
                </Button>
              </Box>
            </Box>

            <TextField
              required
              label="Description..."
              multiline={true}
              maxRows={6}
              sx={{ minWidth: "220px" }}
              onChange={handleOnChangeDescription}
              value={descriptionTask}
              minRows={6}
            />

          </Box>
          <Box display={alert ? "flex" : "none"} justifyContent={"center"} margin={2}>
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
      </List>
    </ClickAwayListener>
  );
};
