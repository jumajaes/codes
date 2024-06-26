
import { Box, Grid } from "@mui/material"
import { Title } from "./userTasksComponents/Title"
import { Options } from "./userTasksComponents/Options"
import { CardTask } from "./userTasksComponents/CardTask"

export const UserTasks = () => {

    return (

        <Box align='center' padding={5} >
            <Options />
            <Title />
            <Grid container columnGap={5} rowGap={5}  justifycontent='center' >
                {[1].map((item,i)=>{
                    return (<CardTask key={i}/>)
                })}
            </Grid>
        </Box>
    )
}