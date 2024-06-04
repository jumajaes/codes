import { Assignment, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, CardContent, Collapse, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";

import { useEffect, useState } from "react";


export const CardCreateTask = () => {
    const [open, setOpen] = useState(false);
    const [priority, setPriority] = useState('MEDIUM')
    const handleClick = () => {
        setOpen(!open);
    };
    const [backGroundColor, setBackGroundColor] = useState('#2196f3')

    useEffect(() => {

        priority === 'MEDIUM' ? setBackGroundColor('#2196f3') : priority === 'HIGH' ? setBackGroundColor('#ffc107') : setBackGroundColor('#9E9E9E')

    }, [priority])


    return (
        <Box sx={{ maxWidth: 420, minWidth: 230, backgroundColor: 'white' }} justifyContent='center' border={5} padding={2}>

            <Typography variant="contained" align='center' color='#1976d2' component={'div'} >
                New TASK
            </Typography>
            <Box>
                <Typography margin={1} backgroundColor='#1976d2' align='center' color='white'>
                    NAME NEW TASK
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
                <Box padding={2} sx={{ backgroundColor: '#1976d2', margin: 2 }} >
                    <Typography variant="contained" backgroundColor='#1976d2' align='center' color='white' component={'div'} >
                        Priority:
                    </Typography>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={priority} sx={{ backgroundColor: backGroundColor, padding: 1 }} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} sx={{ padding: 1, backgroundColor: '#00ACC1' }}>
                        <Button variant={priority === 'HIGH' ? 'contained' : ''} onClick={() => {
                            setPriority('HIGH')
                        }}>
                            HIGH
                        </Button>
                        <Button variant={priority === 'MEDIUM' ? 'contained' : ''} onClick={() => {
                            setPriority('MEDIUM')
                        }}>
                            MEDIUM
                        </Button>
                        <Button variant={priority === 'LOW' ? 'contained' : ''} onClick={() => {
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