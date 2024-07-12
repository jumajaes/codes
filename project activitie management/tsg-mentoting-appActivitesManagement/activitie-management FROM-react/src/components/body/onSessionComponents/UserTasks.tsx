import { Box, Grid, Typography } from "@mui/material";
import { Options } from "./Options.tsx";
import { CardTask } from "./userTaskComponents/CardTask.tsx";
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
              expirationDate={new Date("2023-01-01T05:53:02").toISOString()}
              priority={"low"}
              state={"active"}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
