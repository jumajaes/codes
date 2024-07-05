import { Box, Grid, Typography } from "@mui/material";
import { Options } from "./userTasksComponents/Options.tsx";
import { CardTask } from "./userTasksComponents/CardTask.tsx";
import React from "react";

export default function UserTasks() {
  return (
    <Box padding={3} alignItems={"center"}>
      <Options />
      <hr />
      <Typography
        marginTop={5}
        variant="h3"
        align="left"
        marginLeft={3}
        marginBottom={5}
        fontSize={30}
      >
        Me tasks...
      </Typography>
      <Grid container columnGap={5} rowGap={5} justifyContent="center">
        {[1, 2, 3, 4, 5].map((task, i) => {
          return (
            <CardTask
              key={i + task}
              id={1}
              title={"Firts Task"}
              assingto={1}
              descriptión={
                "loqueseassssssssssssssssssssssssssssssssssssssssssssssss"
              }
              expirationDate={"2/2/2024 11:58:00"}
              priority={"low"}
              state={"expirated"}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
