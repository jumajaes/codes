
import { Box, Grid } from "@mui/material"
import { Title } from "./userTasksComponents/Title"
import { Options } from "./userTasksComponents/Options"
import { CardTask } from "./userTasksComponents/CardTask"

export const UserTasks = () => {

    return (

        <Box align='center' padding={5}>
            <Options />
            <Title />
            <Grid container columnGap={5} rowGap={5} marginTop={5} maxWidth={'85%'} alignContent='center'>
                {[1,2,3,4,5].map(()=>{
                    return (<CardTask/>)
                })}
            </Grid>
        </Box>
    )
}