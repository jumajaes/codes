import { Button, Grid } from "@mui/material";
import { FilterComponent } from "./optionsComponents/FilterComponent.tsx";
import { SearchTaskComponent } from "./optionsComponents/SearchTaskComponent.tsx";
import { CreateTaskComponent } from "./optionsComponents/CreateTaskComponent.tsx";
import React from "react";


interface Option {
    component: React.ReactNode;
    variant: "contained" | "text" | "outlined";
}

const options: Option[] = [
    { component: <CreateTaskComponent />, variant: "contained" },
    { component: <SearchTaskComponent />, variant: "text" },
    { component: <FilterComponent />, variant: "text" },
];

export const Options = () => {
  return (
    <Grid container columnGap={2} rowGap={2}  justifyContent='space-around' >
      {options.map((option, i) => {
        return (
          <Button key={i} variant={option.variant} sx={{maxWidth:270, minWidth:230, margin:1}} onClick={() => {}}>
            {option.component}
          </Button>
        );
      })}
    </Grid>
  );
};
