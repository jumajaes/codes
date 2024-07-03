import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Assignment, TaskAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  CardContent,
  ClickAwayListener,
  TextField,
  Typography,
} from "@mui/material";

export const CreateTaskComponent = () => {
  const [priority, setPriority] = useState("MEDIUM");
  const [open, setOpen] = useState(false);
  const [openAssingTo, setOpenAssingTo] = useState(false);
  const [openPriority, setOpenPriority] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState("#2196f3");
  const [primaryAssing, setPrimaryAssing] = useState("1-Juan Jramillo");
  const [valueDataTime, setvalueDataTime] = useState("01/01/0001 00:00:01");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickPriority = () => {
    setOpenPriority(true);
  };

  const handleClickAssingTo = () => {
    setOpenAssingTo(!openAssingTo);
  };

  const handleOnChangeName = (event) => {
    console.log("Click");
    console.log(event.target.value);
  };

  const handleOnChangeDate = (event) => {
    console.log("Click");
    console.log(event.target.value);
    setvalueDataTime(event.target.value)
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
    priority === "MEDIUM"
      ? setBackGroundColor("#2196f3")
      : priority === "HIGH"
      ? setBackGroundColor("#ffc107")
      : setBackGroundColor("#9E9E9E");
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
            left: "-10%",
            zIndex: 1,
            borderRadius: 10,
            border: 2,
            borderColor: "black",
            backgroundColor: "white",
          }}
        >
          <Box>
            <Box
              sx={{ minWidth: 300, backgroundColor: "white", borderRadius:10 }}
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
                />
              </Box>
              <CardContent>
                <Box>
                  <TextField
                    label="Expiration Date:"
                    type="datetime-local"
                    variant="standard"
                    sx={{ maxWidth: "180px" }}
                    onChange={handleOnChangeDate}
                    value={valueDataTime}
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
                        variant={priority === "HIGH" ? "contained" : "text"}
                        onClick={() => {
                          setPriority("HIGH");
                          setOpenPriority(false);
                        }}
                      >
                        HIGH
                      </Button>
                      <Button
                        sx={{ borderRadius: 25 }}
                        variant={priority === "MEDIUM" ? "contained" : "text"}
                        onClick={() => {
                          setPriority("MEDIUM");
                          setOpenPriority(false);
                        }}
                      >
                        MEDIUM
                      </Button>
                      <Button
                        sx={{ borderRadius: 25 }}
                        variant={priority === "LOW" ? "contained" : "text"}
                        onClick={() => {
                          setPriority("LOW");
                          setOpenPriority(false);
                        }}
                      >
                        LOW
                      </Button>
                    </Collapse>
                  </Box>
                </ClickAwayListener>
                
                <TextField label="Description..." multiline rows="auto" />

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
                        "1 - Juan Manuel Jramillo Espinosa",
                        "2 - Elpepe",
                        "3 - jasinto",
                        "4 - Tyrone",
                        "5 - Mau",
                      ].map((option, i) => {
                        return (
                          <Button
                            key={i}
                            sx={{
                              
                              border:1,
                              borderRadius:10
                            }}
                            onClick={() => {
                              setPrimaryAssing(option);
                              setOpenAssingTo(!openAssingTo);
                            }}
                          >
                            {option}
                          </Button>
                        );
                      })}
                    </Collapse>
                  </Box>
                </ClickAwayListener>
              </CardContent>
            </Box>
            <Button
              endIcon={<Assignment sx={{ fontSize: 10 }} />}
              size="large"
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={() => {
                setOpen(false);
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
