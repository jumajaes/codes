import { Button } from "@mui/material"
import { useStore } from "../../../../../store/context"

export const OptionsNavBar = () => {

    const onSesion = useStore(state => state.onSesion)

    return (
        <>
            <Button color='success' sx={{ background: '#de5500' }} >
                About us...
            </Button>
            {onSesion && "x"}
        </>
    )

}
