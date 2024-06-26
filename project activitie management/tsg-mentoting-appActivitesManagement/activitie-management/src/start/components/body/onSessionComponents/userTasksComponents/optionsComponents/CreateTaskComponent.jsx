import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TaskAlt } from '@mui/icons-material';
import { Box, ClickAwayListener } from '@mui/material';
import { CardCreateTask } from './CardCreateTask';


export const CreateTaskComponent = () => {
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
                <ListItemButton onClick={handleClick}>
                    <TaskAlt />
                    <ListItemText primary="Create New Task" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} sx={{position:"absolute", top:"120%", left:"-7%", zIndex: 1}}>
                    <Box
                        autoComplete="true"
                    >
                        <CardCreateTask />
                    </Box>
                </Collapse>
            </List>
        </ClickAwayListener>
    )
}
