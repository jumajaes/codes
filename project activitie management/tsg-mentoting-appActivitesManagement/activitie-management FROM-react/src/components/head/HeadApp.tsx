import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { LoginButton } from "./headComponents/LoginButton.tsx";
import React from "react";
import { TaskAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function HeadApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Box display="flex" alignItems="center">
            <TaskAlt />

            <Typography textAlign={"center"} paddingLeft={1}>
              TASK MANAGEMENT
            </Typography>
          </Box>

          <LoginButton />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
