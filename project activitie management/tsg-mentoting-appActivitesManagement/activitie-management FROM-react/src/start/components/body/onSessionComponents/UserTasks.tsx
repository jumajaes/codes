import { Box, Grid } from "@mui/material"
import { Title } from "./userTasksComponents/Title.tsx"
import { Options } from "./userTasksComponents/Options.tsx"
import { CardTask } from "./userTasksComponents/CardTask.tsx"
import React from "react"

export default function UserTasks(){



    return (

        <Box padding={5} >
            <Options />
            <Title />
            <Grid container columnGap={5} rowGap={5}  justifyContent='center' >
                {[1,2,3,4,5].map((item,i)=>{
                    return (<CardTask key={i} title={"ytr"} assingto={1} descriptión={undefined} expirationDate={undefined} priority={undefined} state={undefined}/>)
                })}
            </Grid>
        </Box>
    )
}