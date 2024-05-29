import AddTaskIcon from '@mui/icons-material/AddTask';

import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { Box, Button } from '@mui/material';

const options = [[< AddTaskIcon fontSize='large'/>, 'New task', 'contained'], [< ScreenSearchDesktopIcon fontSize='large' />, 'Search tasks', '']]

export const Options = () => {

    return (

        <Box component={"div"} justifyContent={"center"} display={"flex"} gap={5}  >

            {options.map((option) => {
                return(
                <Button variant={option[2]}>
                    {option[0]}
                    {option[1]}
                </Button>)

            })}

        </Box >
    )
}