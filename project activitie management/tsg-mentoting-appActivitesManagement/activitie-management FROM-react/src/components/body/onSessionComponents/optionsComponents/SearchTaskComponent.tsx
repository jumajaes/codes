import React from "react";

import { SearchSharp } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

export const  SearchTaskComponent = () => {
  return (

    <Box
      sx={{
        display:"flex",      
      }}
    >
      
        <TextField  variant="standard" sx={{ minWidth: "150px", zIndex:0}} label="Search by name or id" />

        <Button
        onClick={() => {
            console.log("Clic d");
          }}
        >
          <SearchSharp />
        </Button>
      
    </Box>

  );
};
