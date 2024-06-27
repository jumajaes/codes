import { Assignment, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  CardContent,
  Collapse,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

export const CardCreateTask = () => {

  const [open, setOpen] = useState(false);

  const [priority, setPriority] = useState("MEDIUM");

  const handleClick = () => {
    setOpen(!open);
  };
  
  const [backGroundColor, setBackGroundColor] = useState("#2196f3");

  useEffect(() => {
    priority === "MEDIUM"
      ? setBackGroundColor("#2196f3")
      : priority === "HIGH"
      ? setBackGroundColor("#ffc107")
      : setBackGroundColor("#9E9E9E");
  }, [priority]);

  const handleOnChangeName = (event) => {
    console.log("Click");
    console.log(event.target.value);
  };

  const handleOnChangeDate = (event) => {
    console.log("Click");
    console.log(event.target.value);
  };

  return (
    <Box
      sx={{ maxWidth: 250, backgroundColor: "white" }}
      justifyContent="center"
      borderRadius={10}
      border={1}
      borderColor={"#1976d2"}
      padding={2}
    >
      <Typography
        variant="contained"
        align="center"
        color="#1976d2"
        component={"div"}
      >
        New TASK
      </Typography>
      <Box>
        <TextField
          label=" NAME NEW TASK"
          variant="standard"
          sx={{ maxWidth: "250px" }}
          onChange={handleOnChangeName}
        />
      </Box>
      <CardContent>
        <Box>
          <Typography
            variant="contained"
            borderRadius={20}
            backgroundColor="#1976d2"
            align="center"
            color="white"
            marginTop={1}
            marginBottom={1}
            component={"div"}
          >
            Expieation Date
          </Typography>
          <TextField
            type="datetime-local"
            variant="standard"
            sx={{ maxWidth: "180px" }}
            onChange={handleOnChangeDate}
          />
        </Box>
        <Box
          padding={2}
          borderRadius={7}
          sx={{ backgroundColor: "#1976d2", marginTop: 2, marginBottom: 3 }}
        >
          Priority:
          <ListItemButton onClick={handleClick} sx={{ borderRadius: "25px" }}>
            <ListItemText
              primary={priority}
              sx={{
                backgroundColor: backGroundColor,
                padding: 1,
                borderRadius: "15px",
              }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={open}
            sx={{
              padding: 1,
              backgroundColor: "#00ACC1",
              borderRadius: "15px",
            }}
          >
            <Button
              borderRadius={25}
              variant={priority === "HIGH" ? "contained" : ""}
              onClick={() => {
                setPriority("HIGH");
              }}
            >
              HIGH
            </Button>
            <Button
              borderRadius={25}
              variant={priority === "MEDIUM" ? "contained" : ""}
              onClick={() => {
                setPriority("MEDIUM");
              }}
            >
              MEDIUM
            </Button>
            <Button
              borderRadius={25}
              variant={priority === "LOW" ? "contained" : ""}
              onClick={() => {
                setPriority("LOW");
              }}
            >
              LOW
            </Button>
          </Collapse>
        </Box>

        <TextField label="Description..." multiline rows="auto" />
      </CardContent>
      <Button
        endIcon={<Assignment fontSize="large" align="center" />}
        size="large"
        variant="contained"
        onClick={() => {}}
      >
        Crear
      </Button>
    </Box>
  );
};
