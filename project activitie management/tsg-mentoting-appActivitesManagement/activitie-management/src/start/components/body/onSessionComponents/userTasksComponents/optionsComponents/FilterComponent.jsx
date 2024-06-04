import React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

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
      <List component="nav"
      >
        <ListItemButton onClick={handleClick}>
          <FilterList />
          <ListItemText primary="Filter" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }} >

              <Button endIcon={<CalendarMonth />}>
                <ListItemText primary="Date" />
              </Button>

              <Button endIcon={<IndeterminateCheckBox />}>
                <ListItemText primary="State" />
              </Button>

              <Button endIcon={<PriorityHigh />}>
                <ListItemText primary="Priority" />
              </Button>

            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </ClickAwayListener>
  );
}