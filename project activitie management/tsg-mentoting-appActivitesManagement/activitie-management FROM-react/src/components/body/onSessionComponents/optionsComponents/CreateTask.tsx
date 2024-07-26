/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { TaskAlt } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  ClickAwayListener,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useCreateTask } from "./hooks/useCreateTask.ts";
import { useStore } from "../../../../store/context.ts";

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
    setPriorityCreate,
    handleClick,
    handleClickAway,
    setTaskToEdit,
    setEditId,
    setTaskName,
    setvalueDataTime,
    setDescriptionTask,
    setStateCreate,
    taskToEdit,
    setRequestNewTask,
    setOpen,
    setAlert,
    Users,
  } = useCreateTask();

  const { alertName, setAlertName, editStore } = useStore();

  useEffect(() => {
    Users();

    console.log(taskToEdit.isEdit);
    if (taskToEdit.isEdit) {
      setOpen(true)
      setTaskName(taskToEdit.name);
      setDescriptionTask(taskToEdit.description);
      setPrimaryAssing(taskToEdit.assignedto);
      setEditId(taskToEdit.id);
      setvalueDataTime(taskToEdit.expirationdate);
      setPriorityCreate(taskToEdit.priority);
    }
  }, [requestNewTask, taskToEdit, taskToEdit.isEdit, open, editStore]);

  return (
    <Box>
      <Button
        variant={open ? "text" : "outlined"}
        sx={{
          zIndex: 2,
          fontSize: 20,
          justifyContent: "center",
          color: "#59c7ff",
        }}
        onClick={() => {
          setOpen(true);
          setAlertName(false);
        }}
      >
        <TaskAlt />
        <Typography style={{ textTransform: "capitalize", color: "black" }}>
          Crear nueva tarea
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={() => {
          taskToEdit.isEdit = false;
          setTaskName("");
          setDescriptionTask("");
          setPrimaryAssing("Seleccione Un Usuario");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            sx={{
              alignItems: "center",
              maxHeight: { xs: "650px", md: "400px" },
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
                    Asignar a:
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
                  Prioridad:
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

            <Box margin={1}>
              <Alert
                sx={{ display: requestNewTask ? "flex" : "none" }}
                severity="success"
              >
                !Genial!, se Guardó correctamente.
              </Alert>
              <Alert sx={{ display: alert ? "flex" : "none" }} severity="error">
                Todos los datos son requeridos.
              </Alert>
              <Alert
                sx={{ display: alertName ? "flex" : "none" }}
                severity="error"
              >
                Este nombre ya existe
              </Alert>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"}>
              <Button
                key={"butonCreate"}
                size="large"
                variant="contained"
                sx={{
                  margin: 2,
                  display: alert === false && alertName === false ? "" : "none",
                  justifyContent: "center",
                  width: "120px",
                }}
                onClick={() => {
                  fxVlidate();
                  setTimeout(() => {
                    setAlert(false);
                    setAlertName(false);
                    setRequestNewTask(false);
                    taskToEdit.isEdit = false;
                    setTaskName("");
                    setDescriptionTask("");
                    setPrimaryAssing("Seleccione Un Usuario");
                    taskToEdit.isEdit = false;
                  }, 5000);
                }}
              >
                Guardar
              </Button>

              <Button
                key={"butonCancel"}
                size="large"
                variant="contained"
                sx={{
                  margin: 2,
                  justifyContent: "center",
                  width: "120px",
                }}
                onClick={() => {
                  setOpen(false);
                  setTaskName("");
                  setDescriptionTask("");
                  setPrimaryAssing("Seleccione Un Usuario");
                  taskToEdit.isEdit = false;
                }}
              >
                Cancelar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
