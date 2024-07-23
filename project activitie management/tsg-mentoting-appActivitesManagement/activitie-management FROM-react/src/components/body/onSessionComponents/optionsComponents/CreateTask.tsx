/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import List from "@mui/material/List";
import { TaskAlt } from "@mui/icons-material";
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
    taskName,
    priorityCreate,
    valueDataTime,
    descriptionTask,
    primaryAssing,
    handleClickPriority,
    setPrimaryAssing,
    openAssingTo,
    setOpenAssingTo,
    alert,
    fxVlidate,
    handleOnChangeDescription,
    handleClickAssingTo,
    handleOnChangeName,
    handleOnChangeDate,
    open,
    allUsers,
    alertName,
    handleClick,
    handleClickAway,
    setAlertName,
    setEditId,
    setTaskName,
    setvalueDataTime,
    setDescriptionTask,
    setStateCreate,
    taskToEdit,
    setRequestNewTask,
    setOpen
  } = useCreateTask();

  useEffect(() => {

    console.log(taskToEdit.isEdit)
    if (taskToEdit.isEdit) {
      setEditId(taskToEdit.id)
      handleClickPriority(taskToEdit.priority)
      setTaskName(taskToEdit.name)
      setvalueDataTime(taskToEdit.expirationdate)
      setDescriptionTask(taskToEdit.description)
      setPrimaryAssing(taskToEdit.assignedto)
      setStateCreate(taskToEdit.state)
      taskToEdit.isEdit = false
    }

      setAlertName(false)

    }, [taskToEdit, taskToEdit.id, taskToEdit.state, setAlertName])

  return (
    <List component="nav">
      <Button
        variant={open ? "text" : "outlined"}
        sx={{ zIndex: 2, fontSize: 20, justifyContent: "center", color: "#59c7ff" }}
        onClick={handleClick}
      >
        <TaskAlt />
        <Typography style={{ textTransform: "capitalize", color: "black" }}>
          Create new Task
        </Typography>
      </Button>
      {requestNewTask ?
        <ClickAwayListener onClickAway={() => {
          setRequestNewTask(false)
          setOpen(false)
          setEditId(0)
          handleClickPriority("")
          setTaskName("")
          setvalueDataTime(new Date().toISOString().split(".")[0])
          setDescriptionTask("")
          setPrimaryAssing("Select an User")
          setStateCreate("")
          taskToEdit.id = 0
          taskToEdit.isEdit = false
        }}>
          <Alert
            sx={{
              fontSize: "20px",
              position: "absolute",
              top: "110%",
              left: "-45%",
              zIndex: 3,
              alignItems: "center",
              minWidth: "350px"
            }} severity="success"
          >
            ¡It's gread!, this is success.
          </Alert>
        </ClickAwayListener>
        :
        <Box display={open ? "flex" : "none"}

          sx={{
            width: "2400px",
            height: "1000px",
            position: "absolute",
            left: "-690%",
            zIndex: 5,
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.75)",

          }}
          justifyContent="center"
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ opacity: 1 }}>
              <Box
                display={open ? "flex" : "none"}
                flexDirection={"column"}
                minWidth="315px"
                maxWidth="460px"
                maxHeight="640px"

                sx={{
                  zIndex: 6,
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: 1,

                }}
                justifyContent="center"
              >
                <TextField
                  label={"Name here"}
                  value={taskName}
                  variant="filled"
                  onChange={handleOnChangeName}
                  sx={{ marginTop: "25px", minWidth: "290px" }}
                />
                <Box
                  display={alertName === true ? "flex" : "none"}
                  justifyContent={"center"}
                  margin={1}
                >
                  <Alert severity="error">This name already exists</Alert>
                </Box>
                <br />

                <TextField
                  label="Expiration Date:"
                  type="datetime-local"
                  variant="filled"
                  sx={{ minWidth: "290px" }}
                  onChange={handleOnChangeDate}
                  value={valueDataTime.split(".")[0]}
                />
                <ClickAwayListener
                  onClickAway={() => {
                    setOpenAssingTo(false);
                  }}
                >
                  <Box
                    borderRadius="10px"
                    minWidth={"290px"}
                    sx={{
                      zIndex: 7,
                      display: "flex",
                      margin: 3,
                      alignContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography fontSize={13}>{"Assing to: "}</Typography>
                    <Button
                      onClick={handleClickAssingTo}
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          color: "black",
                          fontSize: "13px",
                        }}
                      >
                        {primaryAssing}
                      </Typography>
                    </Button>
                    <Box
                      display={openAssingTo ? "flex" : "none"}
                      position={"absolute"}
                      flexDirection={"column"}
                      overflow={"scroll"}
                      justifyContent={"center"}
                      sx={{

                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: 2,
                        zIndex: 7,
                        paddingTop: 1,
                      }}
                    >
                      {allUsers.map((option, i) => {
                        return (
                          <Box
                            key={i}
                            sx={{
                              borderBottom: 1,

                              display:
                                option.name === primaryAssing ? "none" : "flex",
                              direction: "colum",
                              justifyContent: "center",
                              borderRadius: "18px",
                            }}
                            minWidth={"290px"}
                            onClick={() => {
                              setPrimaryAssing(option.name);
                              setOpenAssingTo(!openAssingTo);
                            }}
                          >
                            <Typography
                              style={{
                                textTransform: "capitalize",
                                fontSize: "13px",
                              }}
                            >
                              {option.name}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </ClickAwayListener>
                <Typography align="left" fontSize={13}>Priority:</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 1,
                    marginBottom: 2,
                    minWidth: "290px",
                  }}
                >
                  <Button
                    sx={{ borderRadius: 1 }}
                    variant={priorityCreate === "high" ? "contained" : "text"}
                    onClick={() => {
                      handleClickPriority("high");
                    }}
                  >
                    HIGH
                  </Button>
                  <Button
                    sx={{ borderRadius: 1 }}
                    variant={priorityCreate === "medium" ? "contained" : "text"}
                    onClick={() => {
                      handleClickPriority("medium");
                    }}
                  >
                    MEDIUM
                  </Button>
                  <Button
                    sx={{ borderRadius: 1 }}
                    variant={priorityCreate === "low" ? "contained" : "text"}
                    onClick={() => {
                      handleClickPriority("low");
                    }}
                  >
                    LOW
                  </Button>
                </Box>
                <TextField
                  required
                  label="Description..."
                  multiline={true}
                  maxRows={6}
                  sx={{ minWidth: "290px" }}
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
                <Button
                  key={"butonCreate"}
                  size="large"
                  variant="contained"
                  sx={{
                    marginY: 2,
                    display: !alert ? "" : "none",
                    zIndex: 7,
                    justifyContent: "center",
                    width: "120px",
                  }}
                  onClick={() => {
                    fxVlidate();
                    setAlertName(false);
                  }}
                >
                  Crear
                </Button>
              </Box>
            </Box>
          </ClickAwayListener>
        </Box>
      }
    </List>
  );
};
