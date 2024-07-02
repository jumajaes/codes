import { TaskAlt } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

export const TitleNavBar = () => {

    return (
        <Box display="flex" alignItems="center">
            <TaskAlt/>

            <Typography textAlign={'center'} paddingLeft={1}>TASK MANAGEMENT</Typography>
        </Box>
    )
}