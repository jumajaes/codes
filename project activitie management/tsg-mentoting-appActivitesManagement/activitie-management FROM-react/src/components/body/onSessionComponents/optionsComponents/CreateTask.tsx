import React from "react";
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
// useEffect(()=>{
    
//   setEditId(0)
//   setPriorityCreate(priorityCreate)
//   setTaskName(taskName)
//   setvalueDataTime(valueDataTime)
//   setDescriptionTask(descriptionTask)
//   setPrimaryAssing(primaryAssing)
//   setStateCreate(stateCreate)
//   console.log(primaryAssing,priorityCreate,taskName,valueDataTime,descriptionTask," useeffect")
// }, [descriptionTask, primaryAssing, priorityCreate, setDescriptionTask, setEditId, setPrimaryAssing, setPriorityCreate, setStateCreate, setTaskName, setvalueDataTime, stateCreate, taskName, valueDataTime])

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
    
    
     //setEditId,
    // setPriorityCreate,
    // setTaskName,
   
    // setvalueDataTime,
    // stateCreate,
    // setDescriptionTask,
  
    
    // setStateCreate

    
  } = useCreateTask();

  
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav">
        <Button
          variant={open ? "text" : "outlined"}
          sx={{ zIndex: 2, fontSize: 20, justifyContent: "center", color: "#59c7ff" }}
          onClick={handleClick}
        >
          <TaskAlt />
          <Typography style={{ textTransform: "capitalize", color:"black" }}>
            Create new Task
          </Typography>
        </Button>

        <Box
          display={open ? "flex" : "none"}
          flexDirection={"column"}
          minWidth="315px"
          maxWidth="460px"
          sx={{
            position: "absolute",
            top: "80%",
            left: "-50%",
            zIndex: 2,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            border: 1,
          }}
          justifyContent="center"
        >
          <TextField
            label={taskName}
            variant="filled"
            onChange={handleOnChangeName}
            sx={{ marginTop: "25px", minWidth: "290px" }}
          />
          <Box
            display={requestNewTask === false && alertName === true   ? "flex" : "none"}
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
            value={valueDataTime?.split(".")[0]}
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
                zIndex: 2,
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
                  top: "43%",
                  left: "5%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: 2,
                  zIndex: 1,
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
              justifyContent: "center",
              width: "120px",
            }}
            onClick={() => {
              fxVlidate();
            }}
          >  Crear
            {/* <Assignment sx={{ fontSize: 20, zIndex: 0 }} /> Crear */}
          </Button>
        </Box>
      </List>
    </ClickAwayListener>
  );
};
