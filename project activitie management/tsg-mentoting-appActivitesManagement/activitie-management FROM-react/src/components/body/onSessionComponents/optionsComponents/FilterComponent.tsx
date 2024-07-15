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
      <List sx={{alignItems:"center"}} >
        <Button sx={{minWidth:"190px", border:"1px"}} variant={openFilter ? "contained" : "text"} onClick={handleClickFilter} >
          <FilterList />
          Filter
        </Button>
        <Box display={openFilter ? 'flex' : "none"} sx={{ position:"absolute", top:"120%", left:"10%", zIndex:1, backgroundColor:"white", border:1, borderRadius:5, flexDirection:'column', minWidth:"140px" }}>

          <Button>
            <CalendarMonth />
            Date
          </Button>

          <Button >
           
            <IndeterminateCheckBox />
             State
          </Button>

          <Button >
            
            <PriorityHigh />
            Priority
          </Button>

        </Box>
      </List>
    </ClickAwayListener>
  );
}