import {
  TaskAlt,
  Cancel,
  BorderColor,
  DeleteForever,
  Task,
  //   Assignment,
} from "@mui/icons-material";
import {
  // Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  ClickAwayListener,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import { useState } from "react";

export const CardTask = ({
  title,
  descriptión,
  expirationDate,
  priority,
  state,
  assingto,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 250,
        boxShadow: 15,
        borderRadius: "25px",
        padding: 2,
      }}
    >
      <Box display={"flex"} justifyContent="center">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box display={"flex"} justifyContent="space-between">

            <Tooltip title="Change Task State" arrow children={<Button
              variant={open ? "text" : "contained"}
              sx={{ borderRadius: "25px", padding: "5px", margin: "10px", minWidth:"120px" }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              State
            </Button>}/>
            <Box display={open ? "flex-box" : "none"} position={"absolute"} minWidth={250} maxWidth={255} sx={{backgroundColor:"white", zIndex:1, border:1, borderRadius:"15px", justifyContent:"space-around"}}>
            <IconButton aria-label="ACTIVE" color="primary" onClick={() => {
                setOpen(!open);
              }} >
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>Active</Typography>
                  <Task/>
                </Box>
              </IconButton>
              <IconButton aria-label="COMPLETE" color="success" onClick={() => {
                setOpen(!open);
              }} >
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>Completed</Typography>
                  <TaskAlt />
                </Box>
              </IconButton>
              <IconButton aria-label="CANCEL" color="error" onClick={() => {
                setOpen(!open);
              }}>
                <Box
                  border={1}
                  borderRadius={"25px"}
                  display="flex"
                  padding={1}
                >
                  <Typography>Canceled</Typography>
                  <Cancel  />
                </Box>
              </IconButton>
            </Box>
            <Tooltip title="Delete task" arrow children={<IconButton aria-label="DELETE" color="warning"  onClick={() => {
                
              }}>
              <Box border={1} borderRadius={"25px"} display="flex" padding={1}>
                <DeleteForever/>
              </Box>
            </IconButton>}/>
            
            <Tooltip title="Edit task" arrow children={<IconButton aria-label="EDIT" color="secondary" onClick={() => {
                
              }} >
              <Box border={1} borderRadius={"25px"} display="flex" padding={1}>
                <BorderColor />
              </Box>
            </IconButton>}/>
          </Box>
        </ClickAwayListener>
      </Box>
      <hr />
      <CardHeader
        align="center"
        title={
          <Typography variant="h3" color="text.secondary">
            {title}
          </Typography>
        }
        subheader={
          <Box>
            <Typography variant="subtitle2" fontSize={"14px"}>
              Expiration: {"25/06/2024"}
            </Typography>
            <Typography variant="h6" fontSize={"11px"}>
              ID Task:{12544}
            </Typography>
          </Box>
        }
      />
      <Box
        margin={1}
        border={2}
        color="text.secondary"
        borderRadius={"25px"}
        padding={1}
      >
        <Typography
          variant="h6"
          align="left"
          fontSize={15}
          borderRadius={"25px"}
        >
          Priority...
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="white"
          fontSize={20}
          borderRadius={"25px"}
          sx={{ backgroundColor: "#1976d2" }}
        >
          MEDIUM
        </Typography>
      </Box>

      <Box color="text.secondary" padding={2} margin={1}>
        <Typography
          variant="h6"
          fontSize={"12px"}
          color="text.secondary"
          align="left"
        >
          Description...
        </Typography>
        <Typography variant="body2" align="center" padding={1}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Box>

      <Typography
          variant="h6"
          fontSize={"12px"}
          color="text.secondary"
          align="left"
        >
          Responsable: {assingto}
        </Typography>
    </Card>
  );
};
