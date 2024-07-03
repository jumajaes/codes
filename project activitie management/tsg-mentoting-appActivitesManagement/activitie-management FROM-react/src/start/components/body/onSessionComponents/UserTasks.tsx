import { Box, Grid } from "@mui/material"
import { Title } from "./userTasksComponents/Title.tsx"
import { Options } from "./userTasksComponents/Options.tsx"
import { CardTask } from "./userTasksComponents/CardTask.tsx"
import React from "react"

export default function UserTasks(){



    return (

        <Box padding={3} alignItems={"center"} >
            <Options />
            <Title />
            <Grid container columnGap={5} rowGap={5}  justifyContent='center' >
                {[1,2,3,4,5].map((item,i)=>{
                    return (<CardTask key={i+item} id={1} title={"Firts Task"} assingto={1} descriptión={"loqueseass"} expirationDate={"2/2/2024 11:58:00"} priority={"medium"} state={"completed"}/>)
                })}
            </Grid>
        </Box>
    )
}