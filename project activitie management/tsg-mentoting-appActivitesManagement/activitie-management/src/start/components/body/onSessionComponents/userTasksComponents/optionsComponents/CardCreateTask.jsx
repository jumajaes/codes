import { Assignment, ExpandLess, ExpandMore, SearchSharp } from "@mui/icons-material";
import { Box, Button, CardContent, CardHeader, Collapse, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";

import { useState } from "react";


export const CardCreateTask = () => {
    const [open, setOpen] = useState(false);
    const [priority, setPriority] = useState('Medium')
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ maxWidth: 420, minWidth: 230, backgroundColor: 'white' }} justifyContent='center' border={5} padding={2}>

            <Typography variant="contained" backgroundColor='#1976d2' align='center' color='white' component={'div'} >
                New
            </Typography>
            <Box>
                <Typography margin={1} backgroundColor='#1976d2' align='center' color='white'>
                    name
                </Typography>
                <TextField label="name task" variant="standard" sx={{ minWidth: '250PX' }} />
            </Box>
            <CardContent sx={{ display: 'flexbox' }}>

                <Typography>Expiration Date:</Typography>
                <Box >
                    <Typography variant="contained" backgroundColor='#1976d2' align='center' color='white' component={'div'} >
                        Expieation Date
                    </Typography>
                    <TextField

                        type="datetime-local"

                        variant="standard"

                    />
                </Box>
                <Box padding={2} sx={{ backgroundColor: '#1976d2', margin: 2, minWidth: 250 }} >
                    <Typography variant="contained" backgroundColor='#1976d2' align='center' color='white' component={'div'} >
                        Priority:
                    </Typography>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={priority} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} unmountOnExit sx={{backgroundColor:'#2196f3', padding:1}}>
                        <Button variant="contained" onClick={() => {
                            setPriority('HIGH')
                        }}>
                            HIGH
                        </Button>
                        <Button variant="contained" onClick={() => {
                            setPriority('MEDIUM')
                        }}>
                            MEDIUM
                        </Button>
                        <Button variant="contained" onClick={() => {
                            setPriority('LOW')
                        }}>
                            LOW
                        </Button>
                    </Collapse>

                </Box>
                <TextField

                    label="Description..."
                    multiline
                    rows='auto'
                />


            </CardContent>
            <Button endIcon={<Assignment fontSize='large' align='center' />} size='large' variant='contained' onClick={() => { }} >
                Crear
            </Button>
        </Box>
    );
}