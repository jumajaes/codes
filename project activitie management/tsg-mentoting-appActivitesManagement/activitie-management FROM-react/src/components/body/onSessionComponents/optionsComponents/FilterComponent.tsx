import React from 'react';

import List from '@mui/material/List';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { CalendarMonth, FilterList, IndeterminateCheckBox, PriorityHigh } from '@mui/icons-material';
import { Button, ClickAwayListener } from '@mui/material';

export const FilterComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAway = () => {
    setOpen(false);
  };


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav">
        <Button variant={open ? "contained": "text"} onClick={handleClick}>
          <FilterList />
          <ListItemText primary="Filter" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Collapse in={open} timeout="auto"  sx={{position:"absolute", top:"120%", left:"-7%", zIndex: 1, backgroundColor:"white", border:1, borderRadius:10}}>
          <List component="div" disablePadding>
            <Button sx={{ display: 'flex', flexDirection: 'column', minWidth:"140px" }} >

              <Button endIcon={<CalendarMonth />}>
                <ListItemText primary="Date" />
              </Button>

              <Button endIcon={<IndeterminateCheckBox />}>
                <ListItemText primary="State" />
              </Button>

              <Button endIcon={<PriorityHigh />}>
                <ListItemText primary="Priority" />
              </Button>

            </Button>
          </List>
        </Collapse>
      </List>
    </ClickAwayListener>
  );
}