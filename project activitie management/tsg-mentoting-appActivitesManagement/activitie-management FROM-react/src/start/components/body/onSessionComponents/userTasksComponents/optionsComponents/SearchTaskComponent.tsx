import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { SearchSharp } from "@mui/icons-material";
import { Box, Button, ClickAwayListener, TextField } from "@mui/material";

export const SearchTaskComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav" >
        <Button variant={open ? "contained": "outlined"} onClick={handleClick}>
          <SearchSharp />
          <ListItemText  primary="Search to tasks" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Collapse
          in={open}
          sx={{
            position: "absolute",
            backgroundColor:"white",
            borderColor: "#1976d2",
            top: "120%",
            left: "-7%",
            zIndex: 1,
            border:1,
            borderRadius: 5,
            maxWidth:"250px"
          }}
        >
          <Box padding={1}>
          <TextField variant="filled" color="success" sx={{ margin: "10px", minWidth:"220px" }} label="NAME OR ID"  multiline={true} maxRows={6} />

            <Button
              sx={{ color: "black", border: 1, borderColor: "black" }}
              onClick={() => {
                console.log("Clic d");
              }}
            >
              <SearchSharp/>
            </Button>
          </Box>
        </Collapse>
      </List>
    </ClickAwayListener>
  );
};
