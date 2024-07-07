import { Button, Typography } from '@mui/material';
import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
//import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
// import { Box, Drawer, Link } from '@mui/material';
// import { Login } from './loginButtonComponents/Login';
// import { Regist } from './loginButtonComponents/Regist';




export const LoginButton = () => {

  // const [isShow, setIsShow] = useState(false)
  // const [loginORregister, setloginORregister] = useState(<></>)
  // const [textRegist, setTextRegist] = useState("")

  // const onClickQuestion = () => {

  //   textRegist === "Don't have an account? Sign Up" ? setTextRegist("have an account? Sign In") : setTextRegist("Don't have an account? Sign Up")

  //   textRegist === "have an account? Sign In" && setloginORregister(<Login />)
  //   textRegist === "Don't have an account? Sign Up" && setloginORregister(<Regist />)
  // }

  return (
    <Button
        
      >
        <Link to="/user-task" style={{textDecoration:"none"}}><Typography color="white">START</Typography></Link>
      </Button>

    

    // <Box display="flex" alignItems="center">
    //   <Button
    //     variant='contained'
    //     sx={{ overflow: "hidden" }}
    //     onClick={() => {
    //       setTextRegist("Don't have an account? Sign Up")
    //       setloginORregister(<Login />)
    //       setIsShow(true)
    //     }}
    //   >
    //     LOGIN
    //     <BadgeSharpIcon />
    //   </Button>

    //   <Drawer
    //     open={isShow}
    //     onClose={() => {
    //       setIsShow(false)

    //     }}
    //     anchor='right'
    //   >
    //     {loginORregister}


    //     <Button
    //       variant='text'
    //       onClick={onClickQuestion}
    //     >
    //       <Link href="#" variant="body2" >
    //         {textRegist}
    //       </Link>

    //     </Button>


    //   </Drawer>
    // </Box>
  )
}