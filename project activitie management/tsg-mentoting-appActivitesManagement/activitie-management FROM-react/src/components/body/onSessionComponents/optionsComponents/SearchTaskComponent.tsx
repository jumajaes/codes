import React from "react";

import { SearchSharp } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

export const  SearchTaskComponent = () => {
  return (

    <Box
      sx={{
        display:"flex",
        backgroundColor: "white",
        borderColor: "#1976d2",
        border: 1,
        borderRadius: 2,
        maxWidth: "230px"
      }}
    >
      
        <TextField variant="filled" sx={{ minWidth: "150px", zIndex:0}} label="Search by name or id" />

        <Button
          sx={{ padding:0, width:20 }}
          onClick={() => {
            console.log("Clic d");
          }}
        >
          <SearchSharp />
        </Button>
      
    </Box>

  );
};
