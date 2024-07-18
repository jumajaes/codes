import React from "react";
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

export const CreateTask = () => {
  const {
    requestNewTask,
    priorityCreate,
    handleClickPriority,
    valueDataTime,
    descriptionTask,
    primaryAssing,
    setPrimaryAssing,
   
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
    allUsers,
    alertName,
  } = useCreateTask();

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav">
        <Button
          variant={open ? "text" : "outlined"}
          sx={{ zIndex: 1, fontSize: 20, justifyContent: "center" }}
          onClick={handleClick}
        >
          <TaskAlt />
          <ListItemText primary="Create New Task" />
        </Button>
        <Box
          display={open ? "flex" : "none"}
          flexDirection={"column"}
          sx={{
            position: "absolute",
            top: "85%",
            
            zIndex: 1,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minWidth: 300,
              maxWidth: 315,
              backgroundColor: "white",
              borderRadius: "10px",
              alignItems: "center",
              border: 2,
            }}
            justifyContent="center"
            padding={1}
            display="flex"
            flexDirection={"column"}
          >
            <TextField
              label="Name here..."
              variant="standard"
              onChange={handleOnChangeName}
              required
              sx={{ minWidth: "250px" }}
            />
            <Box
              display={alertName  && requestNewTask === false ? "flex" : "none"}
              justifyContent={"center"}
              margin={2}
            >
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
            <ClickAwayListener
              onClickAway={() => {
                setOpenAssingTo(false);
              }}
            >
              <Box
                borderRadius="10px"
                sx={{
                  zIndex: 2,
                  display: "flex",

                  marginTop: 1,
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                Assing To: *
                <Button
                  onClick={handleClickAssingTo}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  {primaryAssing}
                  <Typography
                    sx={{ fontSize: 20, color: "#1976d2", alignSelf: "center" }}
                  >
                    {openAssingTo ? "  *⬆" : "  *⬇"}
                  </Typography>
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
                    borderRadius: "10px",
                    border:2,
                
                    maxWidth: "285px",
                    
                    maxHeight: "240px",
                    zIndex: 1,
                    justifyContent: "center",

                    paddingTop: 1,
                  }}
                >
                  {allUsers.map((option, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          
                          borderBottom: 1,
                          paddingTop: 5,
                          display:
                            option.name === primaryAssing ? "none" : "flex",
                          direction: "colum",
                          justifyContent: "center",
                          cursor: "pointer", // Para que parezca un botón
                          borderRadius: "10px",
                        }}
                        onClick={() => {
                          setPrimaryAssing(option.name);

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
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#00ACC1",
                  borderRadius: "15px",
                }}
              >
                <Button
                  sx={{ borderRadius: 10 }}
                  variant={priorityCreate === "high" ? "contained" : "text"}
                  onClick={() => {
                    handleClickPriority("high");
                  }}
                >
                  HIGH
                </Button>
                <Button
                  sx={{ borderRadius: 10 }}
                  variant={priorityCreate === "medium" ? "contained" : "text"}
                  onClick={() => {
                    handleClickPriority("medium");
                  }}
                >
                  MEDIUM
                </Button>
                <Button
                  sx={{ borderRadius: 10 }}
                  variant={priorityCreate === "low" ? "contained" : "text"}
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
            <Box
              display={alert ? "flex" : "none"}
              justifyContent={"center"}
              margin={2}
            >
              <Alert severity="error">Todos los campos son obligatorios.</Alert>
            </Box>
            <Box
              display={requestNewTask ? "flex" : "none"}
              justifyContent={"center"}
              margin={2}
            >
              <Alert severity="success">This is success task created.</Alert>
            </Box>
            <Button
              key={"butonCreate"}
              size="large"
              variant="contained"
              sx={{
                marginY: 2,
                display: !alert ? "" : "none",
                zIndex: 1,
                justifyContent: "space-between",
                width: "160px",
              }}
              onClick={() => {
                fxVlidate();
              }}
            >
              Crear <Assignment sx={{ fontSize: 20, zIndex: 0 }} />
            </Button>
          </Box>
        </Box>
      </List>
    </ClickAwayListener>
  );
};
