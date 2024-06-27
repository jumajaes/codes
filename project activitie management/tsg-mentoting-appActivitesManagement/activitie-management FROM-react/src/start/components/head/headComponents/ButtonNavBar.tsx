import { Drawer, Button } from '@mui/material';
import { useState } from "react"

import { ReceiptRounded } from '@mui/icons-material';
import { OptionsNavBar } from './NavBarButtonComponents/OptionsNavBar';


export const ButtonNavBar = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <Button color="inherit" onClick={() => setIsShow(true)}>
                <ReceiptRounded />
            </Button>
            
            <Drawer
                open={isShow}
                onClose={() => setIsShow(!isShow)}
            >
                <OptionsNavBar/>
            </Drawer>
        </>
    )
}