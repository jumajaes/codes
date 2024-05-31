import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { TitleNavBar } from './headComponents/TitleNavBar';
import { ButtonNavBar } from './headComponents/ButtonNavBar';
import {LoginButton} from './headComponents/LoginButton';


export default function HeadApp() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' >
        <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}  >

          <ButtonNavBar/>

          <TitleNavBar />

          <LoginButton/>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
