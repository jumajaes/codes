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
    setOpen,
    setAlert,
  } = useCreateTask();

  useEffect(() => {
    console.log(taskToEdit.isEdit);
    if (taskToEdit.isEdit) {
      setEditId(taskToEdit.id);
      handleClickPriority(taskToEdit.priority);
      setTaskName(taskToEdit.name);
      setvalueDataTime(taskToEdit.expirationdate);
      setDescriptionTask(taskToEdit.description);
      setPrimaryAssing(taskToEdit.assignedto);
      setStateCreate(taskToEdit.state);
      taskToEdit.isEdit = false;
    }

    setAlertName(false);
  }, [taskToEdit, taskToEdit.id, taskToEdit.state, setAlertName]);

  return (
    <List component="nav">
      <Button
        variant={open ? "text" : "outlined"}
        sx={{
          zIndex: 2,
          fontSize: 20,
          justifyContent: "center",
          color: "#59c7ff",
        }}
        onClick={handleClick}
      >
        <TaskAlt />
        <Typography style={{ textTransform: "capitalize", color: "black" }}>
          Create new Task
        </Typography>
      </Button>
      {requestNewTask ? (
        <ClickAwayListener
          onClickAway={() => {
            setRequestNewTask(false);
            setOpen(false);
            setEditId(0);
            handleClickPriority("");
            setTaskName("");
            setvalueDataTime(new Date().toISOString().split(".")[0]);
            setDescriptionTask("");
            setPrimaryAssing("Select an User");
            setStateCreate("");
            taskToEdit.id = 0;
            taskToEdit.isEdit = false;
          }}
        >
          <Alert
            sx={{
              fontSize: "20px",
              position: "absolute",
              top: "110%",
              left: "-45%",
              zIndex: 3,
              alignItems: "center",
              minWidth: "350px",
            }}
            severity="success"
          >
            ¡It's gread!, this is success.
          </Alert>
        </ClickAwayListener>
      ) : (
        <Box
          display={open ? "flex" : "none"}
          sx={{
            width: "1800px",
            zIndex: 3,
            backgroundColor: "rgba(0, 0, 0, 0.60)",
          }}
          justifyContent="center"
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box
              display={open ? "flex" : "none"}
              flexDirection={"column"}
              padding="15px"
              // overflow={"scroll"}
              boxShadow={10}
              sx={{
                zIndex: 6,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                border: 1,

                maxHeight: { xs: "650px", md: "max-content" },
                maxWidth: { xs: "520px", md: "700px" },
              }}
            >
              <Box
                display="flex"
                justifyContent={"space-between"}
                padding={1}
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <TextField
                  label={"Name:"}
                  value={taskName}
                  variant="filled"
                  onChange={handleOnChangeName}
                  sx={{ margin: "5px", minWidth: "290px" }}
                />

                <TextField
                  label="Expiration Date:"
                  type="datetime-local"
                  variant="filled"
                  sx={{ margin: "5px", minWidth: "290px" }}
                  onChange={handleOnChangeDate}
                  value={valueDataTime.split(".")[0]}
                />
              </Box>
              <Box
                display={alertName === true ? "flex" : "none"}
                justifyContent={"center"}
                margin={1}
              >
                <Alert severity="error">This name already exists</Alert>
              </Box>
              <Box
                display="flex"
                justifyContent={"center"}
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <ClickAwayListener
                  onClickAway={() => {
                    setOpenAssingTo(false);
                  }}
                >
                  <Box
                    minWidth={"250px"}
                    sx={{
                      zIndex: 10,
                      display: "flex",
                      padding: 1,
                      margin: 1,
                      border: 1,
                      borderRadius: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography fontSize={13} align="center">
                      Assing to:
                    </Typography>
                    <Button
                      onClick={handleClickAssingTo}
                      variant="outlined"
                      sx={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          color: "black",
                          fontSize: "13px",
                          minWidth: "240px",
                        }}
                      >
                        {primaryAssing}
                      </Typography>
                    </Button>
                    <Box
                      display={openAssingTo ? "flex" : "none"}
                      position={"absolute"}
                      flexDirection={"column"}
                      overflow={"auto"}
                      justifyContent={"center"}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: 2,
                        zIndex: 7,
                        padding: 1,
                      }}
                    >
                      {allUsers.map((option, i) => {
                        return (
                          <Box
                            key={i}
                            sx={{
                              borderBottom: 1,
                              padding: 1,

                              display:
                                option.name === primaryAssing ? "none" : "flex",
                              direction: "colum",
                              justifyContent: "center",
                            }}
                            minWidth={"250px"}
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

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    padding: 1,
                    margin: 1,
                    borderRadius: "10px",
                    minWidth: "290px",
                  }}
                >
                  <Typography align="center" fontSize={13}>
                    Priority:
                  </Typography>
                  <Box display="flex" justifyContent="center">
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
                      variant={
                        priorityCreate === "medium" ? "contained" : "text"
                      }
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
                </Box>
              </Box>
              <TextField
                label="Description:"
                multiline={true}
                maxRows={3}
                sx={{ minWidth: { md: "95%", xs: "290px" }, marginTop: 2 }}
                onChange={handleOnChangeDescription}
                value={descriptionTask}
                minRows={3}
              />
              <Box
                display={alert ? "flex" : "none"}
                justifyContent={"center"}
                margin={2}
              >
                <Alert severity="error">All data are required</Alert>
              </Box>
              <Button
                key={"butonCreate"}
                size="large"
                variant="contained"
                sx={{
                  marginY: 2,
                  display: alert === false || alertName === false ? "" : "none",
                  justifyContent: "center",
                  width: "120px",
                }}
                onClick={() => {
                  setAlert(false);
                  fxVlidate();
                  setAlertName(false);
                }}
              >
                Save
              </Button>
            </Box>
          </ClickAwayListener>
        </Box>
      )}
    </List>
  );
};
