import { SearchSharp } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"

export const InputSearch = () => {

    return (
        <Box padding={2} autoComplete="true" minWidth={"250px"}>
            <TextField label="Name or id" variant="standard" sx={{  maxWidth:400, marginBottom:5 }}/>
            <Button variant='contained' onClick={() => {
                console.log('Clic d')
            }}>
                <SearchSharp />
            </Button>
        </Box>)
}