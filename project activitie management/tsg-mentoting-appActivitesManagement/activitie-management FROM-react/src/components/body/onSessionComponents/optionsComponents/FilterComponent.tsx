import React, { useState } from 'react';

import List from '@mui/material/List';

import ListItemText from '@mui/material/ListItemText';

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
      <List sx={{ padding: 0 }} component="nav">
        <Button variant={openFilter ? "contained" : "text"} onClick={handleClickFilter}>
          <FilterList />
          <ListItemText primary="Filter" />
        </Button>
        <Box display={openFilter ? 'flex' : "none"} sx={{ position: "absolute", top: "120%", left: "-20%", zIndex: 1, backgroundColor: "white", border: 1, borderRadius: 5, flexDirection: 'column',  minWidth: "140px" }}>

          <Button>
          <CalendarMonth />
          Date
          </Button>

          <Button >
            State
            <IndeterminateCheckBox />
          </Button>

          <Button >
            Priority
            <PriorityHigh />
          </Button>

        </Box>
      </List>
    </ClickAwayListener>
  );
}