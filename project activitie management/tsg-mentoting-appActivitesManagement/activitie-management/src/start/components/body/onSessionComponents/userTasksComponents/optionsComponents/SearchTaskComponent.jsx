import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SearchSharp } from '@mui/icons-material';
import { Box, ClickAwayListener } from '@mui/material';
import { InputSearch } from './InputSearch';

export const SearchTaskComponent = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickAway = () => {
        setOpen(false);
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <List component="nav">
                <ListItemButton onClick={handleClick}  >

                    <SearchSharp />

                    <ListItemText primary="Search to tasks" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} unmountOnExit >
                    <Box
                        autoComplete="true"

                    >
                        {<InputSearch />}
                    </Box>
                </Collapse>
            </List>
        </ClickAwayListener>
    );
}