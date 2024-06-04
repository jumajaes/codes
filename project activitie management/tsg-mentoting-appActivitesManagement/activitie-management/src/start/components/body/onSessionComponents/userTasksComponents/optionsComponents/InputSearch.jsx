import { SearchSharp } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"

export const InputSearch = () => {

    return (
        <Box padding={2}>
            <TextField label="Name or id" variant="standard" sx={{  minWidth:400 }}/>
            <Button variant='contained' onClick={() => {
                console.log('Clic d')
            }}>
                <SearchSharp />
            </Button>
        </Box>)
}