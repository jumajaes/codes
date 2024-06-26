import {
  TaskAlt,
  Cancel,
  BorderColor,
  DeleteForever,
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
  Typography,
} from "@mui/material";

import { useState } from "react";

export const CardTask = ({
  title,
  descriptión,
  expirationDate,
  priority,
  state,
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
      <Box display={"flex-box"} justifyContent="center">
        <Typography
          width={"90%"}
          alignSelf="center"
          padding="2px"
          margin="5px"
          backgroundColor="#1976d2"
          borderRadius={"25px"}
          color="white"
        >
          ACTIVE
        </Typography>
        <hr/>
      </Box>

      <CardHeader
        align="center"
        title={
          <Typography variant="h6" color="text.secondary">
            Firts Task
          </Typography>
        }
        subheader={
          <Box>
            <Typography variant="h6" fontSize={"14px"}>
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
          backgroundColor="#1976d2"
          align="center"
          color="white"
          fontSize={20}
          borderRadius={"25px"}
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

      <ClickAwayListener onClickAway={handleClickAway}>
        <Box
          display="felx"
          borderColor="gray"
          borderRadius={"25px"}
          border={open ? 2 : 0}
          padding="5px"
        >
          <Button
            variant={open ? "text" : "contained"}
            onClick={() => {
              setOpen(!open);
            }}
          >
            ACTIONS ↓
          </Button>
          <Box display={open ? "flex-box" : "none"}>
            <IconButton aria-label="COMPLETE" color="success">
              <Box border={1} borderRadius={"25px"} display="flex" padding={1}>
                <Typography>Complete</Typography>
                <TaskAlt />
              </Box>
            </IconButton>
            <IconButton aria-label="CANCEL" color="error">
              <Box border={1} borderRadius={"25px"} display="flex" padding={1}>
                <Typography>Cancel</Typography>
                <Cancel />
              </Box>
            </IconButton>
            <hr />
            <IconButton aria-label="DELETE" color="warning">
              <Box border={1} borderRadius={"25px"} display="flex" padding={1}>
                <Typography>Delete</Typography>
                <DeleteForever />
              </Box>
            </IconButton>
            <IconButton aria-label="EDIT" color="secondary">
              <Box border={1} borderRadius={"25px"} display="flex" padding={1}>
                <Typography fontSize={"15px"}> Edit </Typography>
                <BorderColor />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </ClickAwayListener>
    </Card>
  );
};
