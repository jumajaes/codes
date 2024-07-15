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

import { useCreateTask } from "./hooks/useCreateTask.ts";
import React, { useEffect } from "react";

export const CreateTask = () => {
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
  } = useCreateTask();

  useEffect(() => {
  }, [priority])

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
            sx={{ minWidth: 295, maxWidth: 315, backgroundColor: "white", borderRadius: 10 }}
            justifyContent="center"
            padding={1}
            display="flex"
            flexDirection={"column"}
          >
            <Typography
              borderRadius={20}
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

            <br />

            <TextField
              label="Expiration Date:"
              type="datetime-local"
              variant="standard"
              sx={{ minWidth: "250px" }}
              onChange={handleOnChangeDate}
              value={valueDataTime.toISOString().split(".")[0]}
              required
            />

            <ClickAwayListener onClickAway={() => { setOpenAssingTo(false) }}>
              <Box
                padding={1}
                borderRadius="10px"
                sx={{
                  zIndex:2,
                  display: "flex",
                  backgroundColor: "#1976d2",
                  marginTop: 1,
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
                <Typography sx={{ color: "white", alignSelf: "center" }}>{openAssingTo ? "*Assing To*⬆" : "*Assing To*⬇"}</Typography>
                <Button
                  onClick={handleClickAssingTo}
                  sx={{
                    
                    backgroundColor: "white",
                    borderRadius: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  {primaryAssing}
                </Button>

                <Box
                  display={openAssingTo ? "flex" : "none"}
                  position={"absolute"}
                  flexDirection={"column"}
                  overflow={"scroll"}
                  sx={{
                    top: "35%",
                    left: "1%",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    border: 5,
                    borderColor: "#1976d2",
                    minWidth: "285px", 
                    maxWidth: "285px",

                    maxHeight: "240px",
                    zIndex: 1,
                    justifyContent: "center",
                    padding: 1,
                    paddingTop: 11,
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
