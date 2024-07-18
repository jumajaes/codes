import { Box, Grid, Typography } from "@mui/material";
import { Options } from "./Options.tsx";
import { CardTask } from "./userTaskComponents/CardTask.tsx";
import React, { useEffect, useState } from "react";
import task from "../../../store/task";
import { useStore } from "../../../store/context.ts";

export const UserTasks = () =>{

  const { requestNewTask } = useStore();
  const tasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/allActivities");//http://localhos:4000/allActivities
      const data = await response.json();
      setAllTasks(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setAllTasks([]);
    }
  };

  const [allTasks, setAllTasks] = useState<(typeof task)[]>([]);

  useEffect(() => {
    tasks();
    //console.log(requestNewTask.status)
  }, [requestNewTask]);
  return (
    <Box padding={1} alignItems={"center"} >
      <Options />
      <hr />
      <Typography
        marginTop={3}
        variant="h3"
        align="left"
        marginLeft={3}
        marginBottom={5}
        fontSize={30}
      >
        Me tasks:
      </Typography>
      <Grid container columnGap={5} rowGap={5} justifyContent="center">
     
        {allTasks.map((taskElement: typeof task, i) => {
          return (
            <CardTask
              key={i + taskElement.id}
              id={taskElement.id}
              name={taskElement.name}
              assignedto={taskElement.assignedto}
              description={taskElement.description}
              expirationdate={taskElement.expirationdate}
              priority={taskElement.priority}
              state={taskElement.state}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
