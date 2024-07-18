import React, { useState } from 'react';

import List from '@mui/material/List';


import { CalendarMonth, FilterList, IndeterminateCheckBox, PriorityHigh } from '@mui/icons-material';
import { Box, Button, ClickAwayListener } from '@mui/material';

export const FilterComponent = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleClickFilter = () => {
    setOpenFilter(!openFilter);
  };
  const handleClickAwayFilter = () => {
    setOpenFilter(false);
  };


  return (
    <ClickAwayListener onClickAway={handleClickAwayFilter}>
      <List>
        <Button sx={{minWidth:"190px"}} variant={openFilter ? "contained" : "text"} onClick={handleClickFilter} >
          <FilterList />
          Filter
        </Button>
        <Box display={openFilter ? 'flex' : "none"} sx={{ justifyContent:"center", position:"absolute", top:"110%", zIndex:1, backgroundColor:"white", border:1, borderRadius:5, flexDirection:'column', minWidth:"190px" }}>

          <Button
          sx={{display:"flex", justifyContent:"space-between", maxWidth:"100px"}}>
            <CalendarMonth />
            Date
          </Button>

          <Button  sx={{display:"flex", justifyContent:"space-between"}} >
           
            <IndeterminateCheckBox />
             State
          </Button>

          <Button  sx={{display:"flex", justifyContent:"space-between"}} >
            
            <PriorityHigh />
            Priority
          </Button>

        </Box>
      </List>
    </ClickAwayListener>
  );
}