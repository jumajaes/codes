import React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SearchSharp } from '@mui/icons-material';
import { Box } from '@mui/material';
import { InputSearch } from './InputSearch';

export const SearchTaskComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav">
            <ListItemButton onClick={handleClick}>

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
    );
}