import { Box, Button } from '@mui/material';
import { FilterComponent } from './optionsComponents/FilterComponent';
import { SearchTaskComponent } from './optionsComponents/SearchTaskComponent';
import { CreateTaskComponent } from './optionsComponents/CreateTaskComponent';

const options = [[< CreateTaskComponent />,"contained"], [<SearchTaskComponent />,"text"], [<FilterComponent />,""]]

export const Options = () => {
    
    return (

        <Box justifyContent='space-between' display='flex-box'>

            {options.map((option, i) => {

                return (
                    <Button key={i} variant={option[1]} onClick={() => { }} >
                        {option[0]}
                    </Button>

                )
            })}
        </Box >
    )
}