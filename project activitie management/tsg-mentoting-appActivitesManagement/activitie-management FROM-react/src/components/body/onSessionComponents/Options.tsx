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
    <Grid container  rowGap={2} columnGap={2} justifyContent='space-between' >
      {options.map((option, id) => {
        return (
          <Box key={id} sx={{maxWidth:250, minWidth:230}}>
            {option.component}
          </Box>
        );
      })}
    </Grid>
  );
};
