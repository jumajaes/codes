import Typography from '@mui/material/Typography';
import { Task, TaskAlt } from '@mui/icons-material';
import { Box, ListItem, ListItemText } from '@mui/material';

export const Lobby = () => {

    const items = ["Our Task Manager is designed to help you prioritize your tasks, optimize your time, and boost your productivity.", "With our intuitive interface, you can easily create, read, update, and delete tasks. In addition, you can filter your tasks by status (completed/not completed) and sort them by due date or priority.", "Our Task Manager is designed to help you prioritize your tasks, optimize your time, and boost your productivity.", "Whether you’re managing a large project or simply organizing your daily task list, our Task Manager provides you with the tools you need to keep everything in order."];



    return (
        <>
            <Typography component="div" align='center' padding={5}>

                <TaskAlt fontSize='large' />
                <Typography padding={5} variant='h1' component="div" fontSize="medium" >Welcome to our Task Manager</Typography>

                <Typography>Your ally in productivity</Typography>
                <hr></hr>
                <br ></br>
                <Typography variant='h5' >Do you feel overwhelmed with all your tasks and projects? </Typography>
                <br></br>
                <Typography variant='h5' > Are you looking for an efficient way to organize your day-to-day?</Typography>
                <br></br>
                <hr></hr>
                <Typography variant='h3' color={"blue"} padding={5}>You’ve come to the right place.</Typography>
                <br></br>

                <Box>

                    {items.map((item)=>
                    
                    <>
                        <ListItem alignItems='flex-start'  disableGutters secondaryAction={<Task />}>
                            <ListItemText  primary={`*${item}`} />
                        </ListItem>
                        <hr></hr>
                        <br ></br>
                    </>
                    
                    )}

                </Box>
                <Typography color={"blue"}> Start taking control of your tasks and projects today. Register and discover how our Task Manager can transform your productivity!</Typography>
            </Typography>

        </>
    )
}