import { Box, Grid } from "@mui/material";
import { FilterComponent } from "./optionsComponents/FilterComponent.tsx";
import { SearchTaskComponent } from "./optionsComponents/SearchTaskComponent.tsx";
import { CreateTask } from "./optionsComponents/CreateTask.tsx";
import React from "react";


interface Option {
    component: React.ReactNode;
    
}

const options: Option[] = [
    { component: <CreateTask />},
    { component: <SearchTaskComponent />},
    { component: <FilterComponent />},
];

export const Options = () => {
  return (
    <Grid container columnGap={2} rowGap={2}  justifyContent='center' >
      {options.map((option, id) => {
        return (
          <Box key={id} sx={{maxWidth:270, minWidth:230, margin:1, borderRadius:"15px"}}>
            {option.component}
          </Box>
        );
      })}
    </Grid>
  );
};
