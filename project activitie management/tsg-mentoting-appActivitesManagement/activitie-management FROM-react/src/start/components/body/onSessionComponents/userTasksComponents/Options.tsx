import { Box, Button } from "@mui/material";
import { FilterComponent } from "./optionsComponents/FilterComponent";
import { SearchTaskComponent } from "./optionsComponents/SearchTaskComponent";
import { CreateTaskComponent } from "./optionsComponents/CreateTaskComponent";
import React from "react";


interface Option {
    component: React.ReactNode;
    variant: "contained" | "text" | "outlined";
}

const options: Option[] = [
    { component: <CreateTaskComponent />, variant: "contained" },
    { component: <SearchTaskComponent />, variant: "text" },
    { component: <FilterComponent />, variant: "outlined" },
];

export const Options = () => {
  return (
    <Box justifyContent="space-between"  display="flex-box" alignItems="center">
      {options.map((option, i) => {
        return (
          <Button key={i} variant={option.variant} onClick={() => {}}>
            {option.component}
          </Button>
        );
      })}
    </Box>
  );
};
