import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { LoginButton } from "./headComponents/LoginButton.tsx";
import React from "react";
import { TaskAlt } from "@mui/icons-material";
import Typography from '@mui/material/Typography';


export default function HeadApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around", backgroundColor:"#ffff" }}>

          <Box sx={{ display: "flex", color:"#59c7ff", fontSize:"30px", flexDirection:"colunm" }} justifyContent={"center"}>
          <TaskAlt sx={{color:"#59c7ff", marginRight:"10px", fontSize:"30px"}}/> 
          <Typography sx={{color:"#59c7ff", fontSize:23}}>TASK MANAGEMENT</Typography>
          </Box>

          <LoginButton />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
