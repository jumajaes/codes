
import { TaskAlt, Cancel, BorderColor, DeleteForever, Assignment } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import {grey} from '@mui/material/colors'


export const CardTask = ({ title, descriptión, expirationDate, priority, state }) => {

    return (
        <Card sx={{ maxWidth: 400, minWidth: 290}}>
            <Typography variant="h5" backgroundColor='gray' align='center' color='white'>
                Estado
            </Typography>
            <CardHeader
                align='center'
                avatar={
                    <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe" align='center'>
                        <Assignment />
                    </Avatar>
                }
                title=<Typography variant='h5'>
                    NOMBRE TAREA
                </Typography>
                subheader="fecha vencimiento"
            />
            <Typography variant="h5" backgroundColor='blue' align='center' color='white'>
                PRIORITY:
            </Typography>
            <CardContent>
                <Typography variant="h5" color="text.secondary" align='center'>
                    Description:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>

            <CardActions >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography backgroundColor= {grey[100]}> MARK AS:</Typography>
                        <IconButton aria-label="COMPLETED">
                            <Typography>Completed</Typography>
                            <TaskAlt />
                        </IconButton>
                        <IconButton aria-label="CANCELED">
                            <Typography>Canceled</Typography>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Box > 
                        <Typography backgroundColor= {grey[50]}> MAKE:</Typography>
                        <IconButton aria-label="EDIT">
                            <Typography> EDIT</Typography>
                            <BorderColor />
                        </IconButton>
                        <IconButton aria-label="DELETE">
                            <Typography> DELETE</Typography>
                            <DeleteForever />
                        </IconButton>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}