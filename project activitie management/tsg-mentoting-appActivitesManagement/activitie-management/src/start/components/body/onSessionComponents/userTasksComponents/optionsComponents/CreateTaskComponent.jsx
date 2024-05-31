import React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TaskAlt } from '@mui/icons-material';
import { Box} from '@mui/material';
import { CardCreateTask } from './CardCreateTask';


export const CreateTaskComponent= () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav" >
            <ListItemButton onClick={handleClick}>
                <TaskAlt />
                <ListItemText primary="Create New Task" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box
                    autoComplete="true"
                >
                    <CardCreateTask/>
                </Box>
            </Collapse>
        </List>
    );
}
// import { TaskAlt, Cancel, BorderColor, DeleteForever, Assignment } from '@mui/icons-material';
// import { Avatar, Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
// import grey from '@mui/material/colors/grey'


// export const CardTask = ({ title, descriptión, expirationDate, priority, state }) => {

//     return (
//         <Card sx={{ maxWidth: 420, minWidth: 230}} justifyContent='center'>
//             <Typography variant="h5" backgroundColor='gray' align='center' color='white'>
//                 Estado
//             </Typography>
//             <CardHeader
//                 align='center'
//                 avatar={
//                     <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe" align='center'>
//                         <Assignment />
//                     </Avatar>
//                 }
//                 title=<Typography variant='h5'>
//                     NOMBRE TAREA
//                 </Typography>
//                 subheader="fecha vencimiento"
//             />
//             <Typography variant="h5" backgroundColor='blue' align='center' color='white'>
//                 PRIORITY:
//             </Typography>
//             <CardContent>
//                 <Typography variant="h5" color="text.secondary" align='center'>
//                     Description:
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     This impressive paella is a perfect party dish and a fun meal to cook
//                     together with your guests. Add 1 cup of frozen peas along with the mussels,
//                     if you like.
//                 </Typography>
//             </CardContent>

//             <CardActions >
//                 <Box sx={{display: 'flex', justifyContent: 'space-between', width:'100%'}} >
//                     <Box >
//                         <Typography backgroundColor= {grey[200]}> MARK AS:</Typography>
//                         <IconButton aria-label="COMPLETED" color='success' >
//                             <Typography>Completed</Typography>
//                             <TaskAlt />
//                         </IconButton>
//                         <IconButton aria-label="CANCELED" color='error' >
//                             <Typography>Canceled</Typography>
//                             <Cancel />
//                         </IconButton>
//                     </Box>
//                     <Box maxWidth={'50%'} >
//                         <Typography backgroundColor= {grey[100]} > MAKE:</Typography>
//                         <IconButton aria-label="EDIT" color='secondary'>
//                             <Typography > EDIT</Typography>
//                             <BorderColor />
//                         </IconButton>
//                         <IconButton aria-label="DELETE" color='warning'>
//                             <Typography > DELETE</Typography>
//                             <DeleteForever />
//                         </IconButton>
//                     </Box>
//                 </Box>
//             </CardActions>
//         </Card>
//     );
// }