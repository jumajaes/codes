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
import React from "react";

export const CreateTaskComponent = () => {
  const {
    backGroundColor, 
    priority, handleClickPriority,
    valueDataTime, 
    descriptionTask, 
    primaryAssing, setPrimaryAssing,
    setPrimaryAssingId,
    open, 
    openAssingTo, setOpenAssingTo,
    alert, 
    fxVlidate,
    handleOnChangeDescription,
    handleClick,
    handleClickAssingTo,
    handleOnChangeName,
    handleOnChangeDate,
    handleClickAway

  } = useCreateTask();

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
                    // onClick={(e)=>handleClickPriority(e.target.value)}
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

                <ClickAwayListener
                  onClickAway={() => {
                    openAssingTo && setOpenAssingTo(false);
                  }}
                >
                  <Box
                    padding={1}
                    borderRadius={6}
                    sx={{
                      backgroundColor: "#1976d2",
                      marginTop: 2,
                      padding: 1,
                      justifyContent: "center",
                    }}
                  >
                    Assing To:
                    <ListItemButton
                      onClick={handleClickAssingTo}
                      sx={{
                        borderRadius: "15px",
                        justifyContent: "space-between",
                      }}
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
                          <Button
                            key={i}
                            sx={{
                              padding: 1,
                              border: 1,
                              margin: 1,
                              display:
                                option.name === primaryAssing ? "none" : "flex",

                              direction: "colum",
                              justifyContent: "center",
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
